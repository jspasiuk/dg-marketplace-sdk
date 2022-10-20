const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
const ICE_ADDRESS = "0x0000000000000000000000000000000000000000";
const EXECUTE_META_TRANSACTION_FUNCTION_SELECTOR = "0c53c51c";

export const metaTransactionType = [
  { name: "nonce", type: "uint256" },
  { name: "from", type: "address" },
  { name: "functionSignature", type: "bytes" },
];

export function getSalt(chainId: number) {
  if (typeof chainId === "number") {
    return `0x${to32Bytes(chainId.toString(16))}`;
  }

  return `0x${to32Bytes(chainId)}`;
}

export function getDomainData(salt, name, address) {
  const domainData = {
    name: "DGMarketplace",
    version: "v1.0",
    verifyingContract: CONTRACT_ADDRESS,
    chainId: 1,
  };

  const iceDomainData = {
    name: "IceToken",
    version: "v1.2",
    verifyingContract: ICE_ADDRESS,
    chainId: 1,
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
  return { domainData, iceDomainData, domainType, DgDomainData, DgDomainType };
}

function padStart(src, length) {
  const len = src.length;
  if (len >= length) return src;
  if (len % 2 !== 0) src = "0" + src;
  if (len < length)
    while (src.length < length) {
      src = "0" + src;
    }
  return src;
}

function padEnd(src, length) {
  const len = src.length;
  if (len >= length) return src;
  if (len % 2 !== 0) src = "0" + src;
  if (len < length)
    while (src.length < length) {
      src += "0";
    }
  return src;
}

export function to32Bytes(value) {
  return padStart(value.toString().replace("0x", ""), 64);
}

export function normalizeVersion(version) {
  /*
    This is a fix for an issue with Ledger, where v is returned as 0 or 1 and we expect it to be 27 or 28.
    See issue #26 of decentraland-transactions for more details: https://github.com/decentraland/decentraland-transactions/issues/26
  */
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
  account,
  fullSignature,
  functionSignature
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
