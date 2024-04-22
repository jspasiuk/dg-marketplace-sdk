import { ethers } from "ethers";
import {
  getDomainData,
  metaTransactionType,
  getExecuteMetaTransactionData,
  isUrl,
} from "../utils/DGUtils.util";
import {
  CONTRACT_ABI,
  ERC721CollectionV2,
  ABI_20,
  IPFS_PUBLIC_URL,
} from "../constants";
class DGMarketplace {
  apiUrl: string = "";
  gasServerUrl: string = "";
  polygonRpcProvider: string = "";
  theGraphUrl: string = "";
  iceValue: string = "";
  contract: any;
  signer: any;
  userIceBalance: number = 0;
  userIceAllowance: number = 0;
  iceContract: any;
  polygonProvider: any;
  walletProvider: any;
  walletProviderType: string = "";
  contractAddress: string = "";
  iceAddress: string = "";

  constructor() {}

  async init({
    apiUrl,
    gasServerUrl,
    polygonRpcProvider,
    contractAddress,
    iceAddress,
    theGraphUrl,
  }: {
    apiUrl: string;
    gasServerUrl: string;
    polygonRpcProvider: string;
    contractAddress: string;
    iceAddress: string;
    theGraphUrl: string;
  }) {
    this.apiUrl = apiUrl;
    this.gasServerUrl = gasServerUrl;
    this.polygonRpcProvider = polygonRpcProvider;
    this.contractAddress = contractAddress;
    this.iceAddress = iceAddress;
    this.theGraphUrl = theGraphUrl;

    await this.getIceValue();
  }

  async initProvider(
    walletProvider: any,
    walletProviderType: "metamask" | "web3auth"
  ) {
    this.walletProvider = walletProvider;
    this.walletProviderType = walletProviderType;
  }

  async getIceAllowance(userWallet: string) {
    const iceAllowance = await this.iceContract.allowance(
      userWallet,
      this.contractAddress
    );

    const balance = await this.iceContract.balanceOf(userWallet);
    const balanceFormatted = ethers.utils.formatEther(balance.toString());
    this.userIceBalance = Math.round(+balanceFormatted * 1e4) / 1e4;

    const allowedIce = ethers.utils.formatEther(iceAllowance.toString());
    this.userIceAllowance = Math.round(+allowedIce * 1e4) / 1e4;

    return { balance: this.userIceBalance, allowance: this.userIceAllowance };
  }

  validateConnection() {
    if (this.apiUrl === "") {
      throw new Error("Backend URL is not set");
    }
  }

  getContract(userAddress: string) {
    if (!this.polygonRpcProvider) {
      throw new Error("Polygon RPC provider URL is not set");
    }
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        this.polygonRpcProvider
      );
      const signer = provider.getSigner(userAddress);
      const contract = new ethers.Contract(
        this.contractAddress,
        CONTRACT_ABI,
        signer
      );

      const iceContract = new ethers.Contract(this.iceAddress, ABI_20, signer);

      this.polygonProvider = provider;
      this.iceContract = iceContract;
      this.contract = contract;
      this.signer = signer;

      return { signer, contract };
    } catch (error) {
      throw error;
    }
  }

  async getIceValue() {
    try {
      const response = await this.get(`/stripe/ice-price`);
      const data = await response.json();

      this.iceValue = data?.data?.quote?.USD?.price || 0;
    } catch (error) {
      throw error;
    }
  }

  async getUserPublishedTokens(sellerAddress: string) {
    this.validateConnection();
    try {
      const response = await this.get(`/user/nfts/${sellerAddress}`);
      const data = await response.json();

      const Tokens = [];
      for (const token of data.data) {
        const image = this.switchIpfsUri(token.imageUrl);
        Tokens.push({
          tokenId: token.tokenId,
          address: token.nftAddress,
          name: token.name,
          symbol: token.symbol,
          resourceId: token.resourceId,
          image,
          price: token.price,
        });
      }

      return Tokens;
    } catch (error) {
      throw error;
    }
  }

  async getAllCollectionsTogether() {
    this.validateConnection();
    try {
      const query = `
      {
        allCollections: nftaddresses(first: 16, skip: 0, where: { hasNftsForSale: true }) {
          id
          collectionName
          collectionSymbol
          collectionType
          profilePicture
          profilePortrait
          floorPrice
          verified
          NFTs(first: 1, where: {forSale: true}) {
            tokenURI
          }
        }
        highlightedCollections: nftaddresses(first: 16, skip: 0, where: { highlighted: true, hasNftsForSale: true }) {
          id
          collectionName
          collectionSymbol
          collectionType
          profilePicture
          profilePortrait
          floorPrice
          verified
          NFTs(first: 1, where: {forSale: true}) {
            tokenURI
          }
        }
        trendingCollections: nftaddresses(first: 16, skip: 0, orderBy: totalRevenue, orderDirection: desc, where: { hasNftsForSale: true }) {
          id
          collectionName
          collectionSymbol
          collectionType
          profilePicture
          profilePortrait
          floorPrice
          verified
          NFTs(first: 1, where: {forSale: true}) {
            tokenURI
          }
        }
      }`;

      const response = await this.getGraphQuery(query);

      const queryResponse = [];

      queryResponse.push(response.data);

      const responseWithProxy = await this.proxyGraphCollections(
        JSON.stringify(queryResponse)
      );

      console.log("responseWithProxy", responseWithProxy);
      debugger;

      const Collections: any = {
        allCollections: [],
        highlightedCollections: [],
        trendingCollections: [],
      };

      for (const collection of responseWithProxy) {
        try {
          Collections.allCollections = await this.cleanCollectionsData(
            collection.allCollections
          );
          Collections.highlightedCollections = await this.cleanCollectionsData(
            collection.highlightedCollections
          );
          Collections.trendingCollections = await this.cleanCollectionsData(
            collection.trendingCollections
          );
        } catch (error) {
          console.error(error);
        }
      }

      return Collections;
    } catch (error) {
      throw error;
    }
  }

  async cleanCollectionsData(collectionSet: any) {
    const dumpArray: any = [];

    for (const collection of collectionSet) {
      try {
        const CollectionImages = [];
        if (collection.NFTs) {
          for (const token of collection.NFTs) {
            const tokenUri = this.switchIpfsUri(token.tokenURI);
            let metadataInfo;
            let metadata;
            if (token.image) {
              CollectionImages.push(token.image);
            } else {
              if (token.metadata) {
                metadata = JSON.parse(token.metadata);
                CollectionImages.push(metadata.image);
              } else {
                try {
                  metadataInfo = await fetch(tokenUri);
                  metadata = await metadataInfo.json();
                  CollectionImages.push(this.switchIpfsUri(metadata.image));
                } catch (error) {
                  continue;
                }
              }
            }
          }
        }
        dumpArray.push({
          address: collection.id,
          name: collection.collectionName,
          symbol: collection.collectionSymbol,
          floorPrice: collection.floorPrice,
          type: collection.collectionType,
          images: CollectionImages,
          verified: collection.verified,
          profilePicture: collection.profilePicture
            ? this.switchIpfsUri(collection.profilePicture)
            : null,
          profilePortrait: collection.profilePortrait
            ? this.switchIpfsUri(collection.profilePortrait)
            : null,
        });
      } catch (error) {
        throw error;
      }
    }

    return dumpArray;
  }

  async getCollections({
    limit = 100,
    offset = 0,
    orderBy = null,
    filter = null,
  }: {
    limit: number;
    offset: number;
    orderBy: string | null;
    filter: string | null;
  }) {
    this.validateConnection();
    try {
      const orderByQuery = orderBy
        ? `orderBy: ${orderBy},orderDirection: desc`
        : "";
      const filterQuery = filter
        ? `where: { ${filter}, hasNftsForSale: true }`
        : `where: { hasNftsForSale: true }`;

      const query = `
      {
        nftaddresses(first: ${limit}, skip: ${offset} ${orderByQuery} ${filterQuery}) {
          id
          collectionName
          collectionSymbol
          collectionType
          profilePicture
          profilePortrait
          floorPrice
          verified
          NFTs(first: 1, where: {forSale: true}) {
            tokenURI
          }
        }
      }`;

      const response = await this.getGraphQuery(query);

      const queryResponse = response.data.nftaddresses;

      const responseWithProxy = await this.proxyGraphCollections(
        JSON.stringify(queryResponse)
      );

      const Collections = [];
      for (const collection of responseWithProxy) {
        try {
          const CollectionImages = [];
          if (collection.NFTs) {
            for (const token of collection.NFTs) {
              const tokenUri = this.switchIpfsUri(token.tokenURI);
              let metadataInfo;
              let metadata;
              if (token.image) {
                CollectionImages.push(token.image);
              } else {
                if (token.metadata) {
                  metadata = JSON.parse(token.metadata);
                  CollectionImages.push(metadata.image);
                } else {
                  metadataInfo = await fetch(tokenUri);
                  metadata = await metadataInfo.json();
                  CollectionImages.push(this.switchIpfsUri(metadata.image));
                }
              }
            }
          }
          Collections.push({
            address: collection.id,
            name: collection.collectionName,
            symbol: collection.collectionSymbol,
            floorPrice: collection.floorPrice,
            type: collection.collectionType,
            images: CollectionImages,
            verified: collection.verified,
            profilePicture: collection.profilePicture
              ? this.switchIpfsUri(collection.profilePicture)
              : null,
            profilePortrait: collection.profilePortrait
              ? this.switchIpfsUri(collection.profilePortrait)
              : null,
          });
        } catch (error) {
          console.error(error);
        }
      }

      return Collections;
    } catch (error) {
      throw error;
    }
  }

  async searchCollections({
    searchCriteria = null,
  }: {
    searchCriteria: string | null;
  }) {
    this.validateConnection();
    try {
      const query = `
      {
        nftAddressSearch(text: "${searchCriteria}", where: {NFTs_: { forSale: true}}) {
          id
          collectionName
          collectionSymbol
          collectionType
          profilePicture
          profilePortrait
          floorPrice
          verified
          NFTs(first: 1, where: {forSale: true}) {
            tokenURI
          }
        }
      }`;

      const response = await this.getGraphQuery(query);

      const queryResponse = response.data?.nftAddressSearch;

      const responseWithProxy = await this.proxyGraphCollections(
        JSON.stringify(queryResponse)
      );

      const Collections = [];
      for (const collection of responseWithProxy) {
        try {
          const CollectionImages = [];
          if (collection.NFTs) {
            for (const token of collection.NFTs) {
              const tokenUri = this.switchIpfsUri(token.tokenURI);
              let metadataInfo;
              let metadata;
              if (token.image) {
                CollectionImages.push(token.image);
              } else {
                if (token.metadata) {
                  metadata = JSON.parse(token.metadata);
                  CollectionImages.push(metadata.image);
                } else {
                  metadataInfo = await fetch(tokenUri);
                  metadata = await metadataInfo.json();
                  CollectionImages.push(this.switchIpfsUri(metadata.image));
                }
              }
            }
          }
          Collections.push({
            address: collection.id,
            name: collection.collectionName,
            symbol: collection.collectionSymbol,
            floorPrice: collection.floorPrice,
            type: collection.collectionType,
            images: CollectionImages,
            verified: collection.verified,
            profilePicture: collection.profilePicture
              ? this.switchIpfsUri(collection.profilePicture)
              : null,
            profilePortrait: collection.profilePortrait
              ? this.switchIpfsUri(collection.profilePortrait)
              : null,
          });
        } catch (error) {
          console.error(error);
        }
      }

      return Collections;
    } catch (error) {
      throw error;
    }
  }

  async proxyGraphCollections(queryResult: string) {
    try {
      const response = await this.post(
        this.apiUrl + `/nft-service`,
        queryResult
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCollectionsFromDG({
    sellerAddress,
    collectionName,
    limit,
    offset,
    filterCollections,
  }: {
    sellerAddress: string;
    collectionName: string;
    limit?: number;
    offset?: number;
    filterCollections?: string;
  }) {
    this.validateConnection();
    try {
      let url = "/marketplace/collections?1=1";
      url += sellerAddress ? `&sellerAddress=${sellerAddress}` : "";
      url += collectionName ? `&name=${collectionName}` : "";
      url += limit ? `&limit=${limit}` : "";
      url += offset ? `&offset=${offset}` : "";
      url += filterCollections ? `&nftAddress=${filterCollections}` : "";

      const response = await this.get(url);
      const data = await response.json();

      const Collections = [];
      for (const collection of data.data.marketplaceCollections) {
        const CollectionImages = [];
        if (collection.images) {
          for (const image of collection.images) {
            CollectionImages.push(this.switchIpfsUri(image));
          }
        }
        Collections.push({
          address: collection.nftAddress,
          name: collection.name,
          images: CollectionImages,
          isVerifiedCreator: collection.isVerified,
        });
      }

      return Collections;
    } catch (error) {
      throw error;
    }
  }

  switchIpfsUri = (url: string) => {
    const ipfsRegex =
      /^(?:https?:\/\/)?(?:(?:\w+\.)?ipfs\.(?:dweb\.link|(?:\w+\.)?[a-zA-Z]+)|localhost)(?::\d{2,5})?\/(?:ipfs\/)?(Qm[a-zA-Z0-9]{44})/;
    const nativeIpfsRegex = /^ipfs:\/\/(Qm[a-zA-Z0-9]{44})/;
    const nativeIpfsIpfsRegex = /^ipfs:\/\/ipfs\/(Qm[a-zA-Z0-9]{44})(\/.+)?/;

    const ipfsMatch = url.match(ipfsRegex);
    const nativeIpfsMatch = url.match(nativeIpfsRegex);
    const nativeIpfsIpfsMatch = url.match(nativeIpfsIpfsRegex);
    let cid = null;

    if (ipfsMatch) {
      cid = ipfsMatch[1];
    } else if (nativeIpfsMatch) {
      cid = nativeIpfsMatch[1];
    } else if (nativeIpfsIpfsMatch) {
      nativeIpfsIpfsMatch.shift();
      cid = nativeIpfsIpfsMatch.join("");
    }
    if (cid) {
      return `${IPFS_PUBLIC_URL}${cid}`;
    } else {
      return url;
    }
  };

  async getGroups(
    collectionAddress: string,
    order?: string,
    limit?: number,
    offset?: number,
    name?: string,
    sellerAddress?: string
  ) {
    this.validateConnection();
    try {
      let url = ``;
      if (sellerAddress) {
        url = `/marketplace/user-listings-by-collection/${sellerAddress}/${collectionAddress}?1=1`;
      } else {
        url = `/marketplace?nftAddress=${collectionAddress}`;
      }
      url += order ? `&price=${order}` : "";
      url += limit ? `&limit=${limit}` : "";
      url += offset ? `&offset=${offset}` : "";
      url += name ? `&name=${name}` : "";

      const response = await this.get(url);
      const data = await response.json();

      const Groups = [];
      for (const group of data.data.marketplaceListings) {
        const image = this.switchIpfsUri(group.imageUrl);

        const price = group.price;

        Groups.push({
          address: group.nftAddress,
          name: group.name,
          image,
          tokenId: group.tokenId,
          price,
          priceUsd: (+price * +this.iceValue).toFixed(2),
          isVerifiedCreator: group.isVerifiedCreator,
          contractType: group.contractType,
          symbol: group.symbol,
          description: group.description,
          sellerAddress: group.sellerAddress,
          resourceId: group.resourceId,
        });
      }

      return Groups;
    } catch (error) {
      throw error;
    }
  }

  async getTokens(
    collectionAddress: string,
    groupId: string,
    sellerAddress?: string,
    limit?: number,
    offset?: number
  ) {
    this.validateConnection();
    try {
      let url = `/marketplace/collection/${collectionAddress}/${groupId}?1=1`;
      url += sellerAddress ? `&sellerAddress=${sellerAddress}` : "";
      url += limit ? `&limit=${limit}` : "";
      url += offset ? `&offset=${offset}` : "";

      const response = await this.get(url);
      const data = await response.json();

      const Tokens = [];
      for (const token of data.data.marketplaceCollections) {
        const image = this.switchIpfsUri(token.image);

        const price = token.price;

        Tokens.push({
          address: token.nftAddress,
          name: token.name,
          image,
          tokenId: token.tokenId,
          price,
          priceUsd: (+price * +this.iceValue).toFixed(2),
          symbol: token.symbol,
          description: token.description,
          sellerAddress: token.sellerAddress,
          resourceId: token.resourceId,
        });
      }

      return Tokens;
    } catch (error) {
      throw error;
    }
  }

  async getPaymentLink(
    platform: string,
    buyerAddress: string,
    tokenAddress: string,
    tokenId: string,
    resourceId: string
  ) {
    this.validateConnection();

    const isValid = await this.validateListing(tokenAddress, tokenId);
    if (!isValid) {
      throw new Error("Invalid listing");
    }

    try {
      switch (platform) {
        case "paper":
        case "coinbase":
        case "binance":
          break;
        default:
          throw new Error("Invalid platform");
      }

      const response = await this.get(
        `/${platform}/payment-link?nftAddress=${tokenAddress}&buyerAddress=${buyerAddress}&tokenId=${tokenId}&resourceId=${resourceId}&currency=USDT`
      );
      const data = await response.json();

      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async buyItem(
    userAddress: string,
    tokenAddress: string,
    tokenId: string,
    price: string
  ) {
    try {
      const isValid = await this.validateListing(tokenAddress, tokenId);

      if (!isValid) {
        throw new Error("Invalid listing");
      }

      const priceWei = ethers.utils.parseEther(price);

      const approveHex = await this.contract.populateTransaction.buy(
        tokenAddress,
        [tokenId],
        [priceWei]
      );

      const { domainData, domainType } = getDomainData(
        this.contractAddress,
        this.contractAddress,
        userAddress
      );

      const nonce = await this.contract.getNonce(userAddress);

      const message = {
        nonce: nonce.toString(),
        from: userAddress,
        functionSignature: approveHex.data,
      };

      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message,
      });

      const userSignature = await this.requestUserSignature(
        userAddress,
        dataToSign
      );

      const serverPayload = JSON.stringify({
        transactionData: {
          from: userAddress,
          params: [
            this.contractAddress,
            getExecuteMetaTransactionData(
              userAddress,
              userSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServerUrl, serverPayload);

      const data = await response.json();

      if (data.ok === false) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async validateListing(tokenAddress: string, tokenId: string) {
    try {
      const isValid = await this.contract.getOrderActive(tokenAddress, tokenId);
      return isValid;
    } catch (error) {
      throw error;
    }
  }

  async sendAsGift(
    userAddress: string,
    giftAddress: string,
    tokenAddress: string,
    tokenId: string,
    price: string
  ) {
    try {
      const isValid = await this.validateListing(tokenAddress, tokenId);
      if (!isValid) {
        throw new Error("Invalid listing");
      }

      const priceWei = ethers.utils.parseEther(price);

      const approveHex = await this.contract.populateTransaction.buyForGift(
        tokenAddress,
        [tokenId],
        giftAddress,
        [priceWei]
      );

      const { domainData, domainType } = getDomainData(
        this.contractAddress,
        this.contractAddress,
        userAddress
      );

      const nonce = await this.contract.getNonce(userAddress);

      const message = {
        nonce: nonce.toString(),
        from: userAddress,
        functionSignature: approveHex.data,
      };

      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message,
      });

      const userSignature = await this.requestUserSignature(
        userAddress,
        dataToSign
      );

      const serverPayload = JSON.stringify({
        transactionData: {
          from: userAddress,
          params: [
            this.contractAddress,
            getExecuteMetaTransactionData(
              userAddress,
              userSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServerUrl, serverPayload);

      const data = await response.json();

      if (data.ok === false) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async cancelPublishedItem(
    metamaskProvider: any,
    userAddress: string,
    tokenAddress: string,
    tokenIdArray: [string]
  ) {
    try {
      for (let i = 0; i < tokenIdArray.length; i++) {
        const tokenId = tokenIdArray[i];
        const isValid = await this.validateListing(tokenAddress, tokenId);
        if (!isValid) {
          throw new Error("Invalid listing");
        }
      }

      const approveHex = await this.contract.populateTransaction.cancel(
        tokenAddress,
        tokenIdArray
      );

      const { domainData, domainType } = getDomainData(
        this.contractAddress,
        this.contractAddress,
        userAddress
      );

      const nonce = await this.contract.getNonce(userAddress);

      const message = {
        nonce: nonce.toString(),
        from: userAddress,
        functionSignature: approveHex.data,
      };

      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message,
      });

      const metamaskSignature = await metamaskProvider.request({
        method: "eth_signTypedData_v4",
        params: [userAddress, dataToSign],
        jsonrpc: "2.0",
        id: 999999999999,
      });

      const serverPayload = JSON.stringify({
        transactionData: {
          from: userAddress,
          params: [
            this.contractAddress,
            getExecuteMetaTransactionData(
              userAddress,
              metamaskSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServerUrl, serverPayload);

      const data = await response.json();

      if (data.ok === false) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async approveContractIce(userWallet: string) {
    try {
      const approveHex = await this.iceContract.populateTransaction.approve(
        this.contractAddress,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );

      const { iceDomainData, ICEdomainType } = getDomainData(
        this.iceAddress,
        this.iceAddress,
        ""
      );

      const nonce = await this.iceContract.getNonce(userWallet);

      const message = {
        nonce: nonce.toString(),
        from: userWallet,
        functionSignature: approveHex.data,
      };

      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: ICEdomainType,
          MetaTransaction: metaTransactionType,
        },
        domain: iceDomainData,
        primaryType: "MetaTransaction",
        message: message,
      });

      const userSignature = await this.requestUserSignature(
        userWallet,
        dataToSign
      );

      const serverPayload = JSON.stringify({
        transactionData: {
          from: userWallet,
          params: [
            this.iceAddress,
            getExecuteMetaTransactionData(
              userWallet,
              userSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServerUrl, serverPayload);

      const data = await response.json();

      if (data.ok === false) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getTransactionStatus(txnHash: string) {
    try {
      let txReceipt = await this.polygonProvider.getTransactionReceipt(txnHash);
      while (!txReceipt) {
        await this.polygonProvider.waitForTransaction(txnHash);
        txReceipt = await this.polygonProvider.getTransactionReceipt(txnHash);
      }

      if (txReceipt.status === 1) {
        return { txReceipt, status: true };
      } else {
        return { txReceipt, status: false };
      }
    } catch (error) {
      throw error;
    }
  }

  async getCoinbaseStatus(paymentCode: string) {
    try {
      const response = await this.get(
        `/coinbase/payment-status?code=${paymentCode}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getTokenMetadata(collectionAddress: string, tokenId: string) {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        this.polygonRpcProvider
      );
      const contract = new ethers.Contract(
        collectionAddress,
        ERC721CollectionV2,
        provider
      );

      const tokenUri = await contract.tokenURI(tokenId);
      if (isUrl(tokenUri)) {
        const fixedUri = this.switchIpfsUri(tokenUri);
        const response = await fetch(fixedUri);
        const data = await response.json();
        return data;
      } else {
        throw new Error("Invalid token URI");
      }
    } catch (error) {
      throw error;
    }
  }

  async get(url: string) {
    return fetch(`${this.apiUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async post(url: string, body: string) {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  }

  async getGraphQuery(graphqlQuery: string) {
    try {
      const response = await fetch(this.theGraphUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: graphqlQuery }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async requestUserSignature(userWallet: string, dataToSign: string) {
    let status;
    switch (this.walletProviderType) {
      case "metamask":
        status = await this.walletProvider.request({
          method: "eth_signTypedData_v4",
          params: [userWallet, dataToSign],
          jsonrpc: "2.0",
          id: 999999999999,
        });
        break;
      case "web3auth":
        const etherProvider = new ethers.providers.Web3Provider(
          this.walletProvider
        );
        const signer = etherProvider.getSigner();
        status = await signer.provider.send("eth_signTypedData_v4", [
          userWallet,
          dataToSign,
        ]);
        break;
      default:
        break;
    }

    return status;
  }
}

export default DGMarketplace;
