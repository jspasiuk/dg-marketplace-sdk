import { ethers } from "ethers";
import {
  fixIpfsImage,
  getDomainData,
  metaTransactionType,
  getExecuteMetaTransactionData,
} from "../utils/DGUtils.util";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";
class DGMarketplace {
  backend_url: string = "";
  gasServer_url: string = "";
  polygonRpcProvider_url: string = "";
  iceValue: string = "";
  contract: any;
  signer: any;

  constructor() {}

  async init(
    backend_url: string,
    gasServer_url: string,
    polygonRpcProvider_url: string
  ) {
    this.backend_url = backend_url;
    this.gasServer_url = gasServer_url;
    this.polygonRpcProvider_url = polygonRpcProvider_url;

    await this.getIceValue();
  }

  validateConnection() {
    if (this.backend_url === "") {
      throw new Error("Backend URL is not set");
    }
  }

  getContract(userAddress: string) {
    if (!this.polygonRpcProvider_url) {
      throw new Error("Polygon RPC provider URL is not set");
    }
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        this.polygonRpcProvider_url
      );
      const signer = provider.getSigner(userAddress);
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

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
        const image = fixIpfsImage(token.imageUrl);
        Tokens.push({
          tokenId: token.tokenId,
          address: token.nftAddress,
          name: token.name,
          symbol: token.symbol,
          resourceId: token.resourceId,
          image,
          price: ethers.utils.formatEther(token.price.toString()),
        });
      }

      return Tokens;
    } catch (error) {
      throw error;
    }
  }

  async getCollections(verifiedCreator: boolean) {
    this.validateConnection();
    try {
      const response = await this.get(`/marketplace/collections`);
      const data = await response.json();

      const Collections = [];
      for (const collection of data.data) {
        const CollectionImages = [];
        if (collection.images) {
          for (const image of collection.images) {
            CollectionImages.push(fixIpfsImage(image));
          }
        }
        Collections.push({
          address: collection.nftAddress,
          name: collection.name,
          images: CollectionImages,
        });
      }

      return Collections;
    } catch (error) {
      throw error;
    }
  }

  async getGroups(
    collectionAddress: string,
    order?: string,
    limit?: number,
    offset?: number,
    name?: string
  ) {
    this.validateConnection();
    try {
      let url = `/marketplace?nftAddress=${collectionAddress}`;
      url += order ? `&price=${order}` : "";
      url += limit ? `&limit=${limit}` : "";
      url += offset ? `&offset=${offset}` : "";
      url += name ? `&name=${name}` : "";

      const response = await this.get(url);
      const data = await response.json();

      const Groups = [];
      for (const group of data.data.marketplaceListings) {
        const image = fixIpfsImage(group.imageUrl);

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

  async getTokens(collectionAddress: string, groupId: string) {
    this.validateConnection();
    try {
      const url = `/marketplace/collection/${collectionAddress}/${groupId}`;

      const response = await this.get(url);
      const data = await response.json();

      const Tokens = [];
      for (const token of data.data) {
        const image = fixIpfsImage(token.image);

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
        `/${platform}/payment-link?address=${tokenAddress}&buyerAddress=${buyerAddress}&tokenId=${tokenId}&resourceId=${resourceId}&currency=USDT`
      );
      const data = await response.json();

      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async buyItem(
    metamaskProvider: any,
    userAddress: string,
    tokenAddress: string,
    tokenId: string
  ) {
    try {
      const approveHex = await this.contract.populateTransaction.buy(
        tokenAddress,
        [tokenId]
      );

      const { domainData, domainType } = getDomainData(
        CONTRACT_ADDRESS,
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
            CONTRACT_ADDRESS,
            getExecuteMetaTransactionData(
              userAddress,
              metamaskSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServer_url, serverPayload);

      const data = await response.json();

      if (data.ok === false) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async sendAsGift(
    metamaskProvider: any,
    userAddress: string,
    giftAddress: string,
    tokenAddress: string,
    tokenId: string
  ) {
    try {
      const approveHex = await this.contract.populateTransaction.buyForGift(
        tokenAddress,
        [tokenId],
        giftAddress
      );

      const { domainData, domainType } = getDomainData(
        CONTRACT_ADDRESS,
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
            CONTRACT_ADDRESS,
            getExecuteMetaTransactionData(
              userAddress,
              metamaskSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServer_url, serverPayload);

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
    tokenId: string
  ) {
    try {
      const approveHex = await this.contract.populateTransaction.cancel(
        tokenAddress,
        [tokenId]
      );

      const { domainData, domainType } = getDomainData(
        CONTRACT_ADDRESS,
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
            CONTRACT_ADDRESS,
            getExecuteMetaTransactionData(
              userAddress,
              metamaskSignature,
              approveHex.data
            ),
          ],
        },
      });

      const response = await this.post(this.gasServer_url, serverPayload);

      const data = await response.json();

      if (data.ok === false) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(url: string) {
    return fetch(`${this.backend_url}${url}`, {
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
}

export default DGMarketplace;
