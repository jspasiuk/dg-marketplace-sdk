export declare const fixIpfsImage: (image: string) => string;
export declare const metaTransactionType: {
    name: string;
    type: string;
}[];
export declare function getSalt(chainId: number | string): string;
export declare function to32Bytes(value: number | string): string;
export declare function getDomainData(contractAddress: string, salt: any, address: string): {
    domainData: {
        name: string;
        version: string;
        verifyingContract: string;
        chainId: number;
    };
    iceDomainData: {
        name: string;
        version: string;
        verifyingContract: string;
        chainId: number;
    };
    domainType: {
        name: string;
        type: string;
    }[];
    DgDomainData: {
        version: string;
        verifyingContract: string;
        name: string;
        salt: any;
    };
    DgDomainType: {
        name: string;
        type: string;
    }[];
};
export declare function normalizeVersion(version: string): string;
export declare function getExecuteMetaTransactionData(account: any, fullSignature: any, functionSignature: any): string;
export declare const isUrl: (str: string) => boolean;
