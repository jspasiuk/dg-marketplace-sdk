import { ethers } from "ethers";
declare class DGMarketplace {
    apiUrl: string;
    gasServerUrl: string;
    polygonRpcProvider: string;
    theGraphUrl: string;
    iceValue: string;
    contract: any;
    signer: any;
    userIceBalance: number;
    userIceAllowance: number;
    iceContract: any;
    polygonProvider: any;
    walletProvider: any;
    walletProviderType: string;
    contractAddress: string;
    constructor();
    init({ apiUrl, gasServerUrl, polygonRpcProvider, contractAddress, theGraphUrl, }: {
        apiUrl: string;
        gasServerUrl: string;
        polygonRpcProvider: string;
        contractAddress: string;
        theGraphUrl: string;
    }): Promise<void>;
    initProvider(walletProvider: any, walletProviderType: "metamask" | "web3auth"): Promise<void>;
    getIceAllowance(userWallet: string): Promise<{
        balance: number;
        allowance: number;
    }>;
    validateConnection(): void;
    getContract(userAddress: string): {
        signer: ethers.providers.JsonRpcSigner;
        contract: ethers.Contract;
    };
    getIceValue(): Promise<void>;
    getUserPublishedTokens(sellerAddress: string): Promise<{
        tokenId: any;
        address: any;
        name: any;
        symbol: any;
        resourceId: any;
        image: string;
        price: any;
    }[]>;
    getCollections({ limit, offset, orderBy, filter, }: {
        limit: number;
        offset: number;
        orderBy: string | null;
        filter: string | null;
    }): Promise<{
        address: any;
        name: any;
        symbol: any;
        floorPrice: any;
        type: any;
        images: string[];
        verified: any;
        profilePicture: string | null;
        profilePortrait: string | null;
    }[]>;
    switchIpfsUri: (url: string) => string;
    getGroups(collectionAddress: string, order?: string, limit?: number, offset?: number, name?: string, sellerAddress?: string): Promise<{
        address: any;
        name: any;
        image: string;
        tokenId: any;
        price: any;
        priceUsd: string;
        isVerifiedCreator: any;
        contractType: any;
        symbol: any;
        description: any;
        sellerAddress: any;
        resourceId: any;
    }[]>;
    getTokens(collectionAddress: string, groupId: string, sellerAddress?: string, limit?: number, offset?: number): Promise<{
        address: any;
        name: any;
        image: string;
        tokenId: any;
        price: any;
        priceUsd: string;
        symbol: any;
        description: any;
        sellerAddress: any;
        resourceId: any;
    }[]>;
    getPaymentLink(platform: string, buyerAddress: string, tokenAddress: string, tokenId: string, resourceId: string): Promise<any>;
    buyItem(userAddress: string, tokenAddress: string, tokenId: string): Promise<any>;
    validateListing(tokenAddress: string, tokenId: string): Promise<any>;
    sendAsGift(userAddress: string, giftAddress: string, tokenAddress: string, tokenId: string): Promise<any>;
    cancelPublishedItem(metamaskProvider: any, userAddress: string, tokenAddress: string, tokenIdArray: [string]): Promise<any>;
    approveContractIce(userWallet: string): Promise<any>;
    getTransactionStatus(txnHash: string): Promise<{
        txReceipt: any;
        status: boolean;
    }>;
    getCoinbaseStatus(paymentCode: string): Promise<any>;
    getTokenMetadata(collectionAddress: string, tokenId: string): Promise<any>;
    get(url: string): Promise<Response>;
    post(url: string, body: string): Promise<Response>;
    getGraphQuery(graphqlQuery: string): Promise<any>;
    requestUserSignature(userWallet: string, dataToSign: string): Promise<any>;
}
export default DGMarketplace;
