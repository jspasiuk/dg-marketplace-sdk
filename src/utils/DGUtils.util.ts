const EXECUTE_META_TRANSACTION_FUNCTION_SELECTOR = "0c53c51c";

export const metaTransactionType = [
  { name: "nonce", type: "uint256" },
  { name: "from", type: "address" },
  { name: "functionSignature", type: "bytes" },
];

export function getSalt(chainId: number | string) {
  if (typeof chainId === "number") {
    return `0x${to32Bytes(chainId.toString(16))}`;
  }

  return `0x${to32Bytes(chainId)}`;
}
export function to32Bytes(value: number | string) {
  return padStart(value.toString().replace("0x", ""), 64);
}
function padStart(src: string, length: number) {
  const len = src.length;
  if (len >= length) return src;
  if (len % 2 !== 0) src = "0" + src;
  if (len < length)
    while (src.length < length) {
      src = "0" + src;
    }
  return src;
}

function padEnd(src: string, length: number) {
  const len = src.length;
  if (len >= length) return src;
  if (len % 2 !== 0) src = "0" + src;
  if (len < length)
    while (src.length < length) {
      src += "0";
    }
  return src;
}

export function getDomainData(
  contractAddress: string,
  salt: any,
  address: string
) {
  const domainData = {
    name: "DGMarketplace",
    version: "v1.0",
    verifyingContract: contractAddress,
    chainId: 1,
  };

  const iceDomainData = {
    name: "Bag(PoS)",
    version: "1",
    verifyingContract: contractAddress,
    salt: "0x0000000000000000000000000000000000000000000000000000000000000089",
  };

  const DgDomainData = {
    version: "2",
    verifyingContract: address,
    name: "Decentraland Collection",
    salt,
  };

  const DgDomainType = [
    { name: "version", type: "string" },
    { name: "verifyingContract", type: "address" },
    { name: "name", type: "string" },
    { name: "salt", type: "bytes32" },
  ];

  const domainType = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
  ];

  const ICEdomainType = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "verifyingContract", type: "address" },
    { name: "salt", type: "bytes32" },
  ];
  return {
    domainData,
    iceDomainData,
    ICEdomainType,
    domainType,
    DgDomainData,
    DgDomainType,
  };
}

export function normalizeVersion(version: string) {
  let parsed = parseInt(version, 16);
  if (parsed < 27) {
    // this is because Ledger returns 0 or 1
    parsed += 27;
  }
  if (parsed !== 27 && parsed !== 28) {
    //throw Error(Invalid signature version "${version}" (parsed: ${parsed}))
  }
  return parsed.toString(16);
}

export function getExecuteMetaTransactionData(
  account: any,
  fullSignature: any,
  functionSignature: any
) {
  const signature = fullSignature.replace("0x", "");
  const r = signature.substring(0, 64);
  const s = signature.substring(64, 128);
  const v = normalizeVersion(signature.substring(128, 130));

  const method = functionSignature.replace("0x", "");
  const signatureLength = (method.length / 2).toString(16);
  const signaturePadding = Math.ceil(method.length / 64);

  return [
    "0x",
    EXECUTE_META_TRANSACTION_FUNCTION_SELECTOR,
    to32Bytes(account),
    to32Bytes("a0"),
    r,
    s,
    to32Bytes(v),
    to32Bytes(signatureLength),
    padEnd(method, 64 * signaturePadding),
  ].join("");
}

export const isUrl = (str: string) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
};
