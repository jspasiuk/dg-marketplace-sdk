"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = exports.getExecuteMetaTransactionData = exports.normalizeVersion = exports.getDomainData = exports.to32Bytes = exports.getSalt = exports.metaTransactionType = void 0;
var EXECUTE_META_TRANSACTION_FUNCTION_SELECTOR = "0c53c51c";
exports.metaTransactionType = [
    { name: "nonce", type: "uint256" },
    { name: "from", type: "address" },
    { name: "functionSignature", type: "bytes" },
];
function getSalt(chainId) {
    if (typeof chainId === "number") {
        return "0x".concat(to32Bytes(chainId.toString(16)));
    }
    return "0x".concat(to32Bytes(chainId));
}
exports.getSalt = getSalt;
function to32Bytes(value) {
    return padStart(value.toString().replace("0x", ""), 64);
}
exports.to32Bytes = to32Bytes;
function padStart(src, length) {
    var len = src.length;
    if (len >= length)
        return src;
    if (len % 2 !== 0)
        src = "0" + src;
    if (len < length)
        while (src.length < length) {
            src = "0" + src;
        }
    return src;
}
function padEnd(src, length) {
    var len = src.length;
    if (len >= length)
        return src;
    if (len % 2 !== 0)
        src = "0" + src;
    if (len < length)
        while (src.length < length) {
            src += "0";
        }
    return src;
}
function getDomainData(contractAddress, salt, address) {
    var domainData = {
        name: "DGMarketplace",
        version: "v1.0",
        verifyingContract: contractAddress,
        chainId: 1,
    };
    var iceDomainData = {
        name: "IceToken",
        version: "v1.2",
        verifyingContract: contractAddress,
        chainId: 1,
    };
    var DgDomainData = {
        version: "2",
        verifyingContract: address,
        name: "Decentraland Collection",
        salt: salt,
    };
    var DgDomainType = [
        { name: "version", type: "string" },
        { name: "verifyingContract", type: "address" },
        { name: "name", type: "string" },
        { name: "salt", type: "bytes32" },
    ];
    var domainType = [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
    ];
    return { domainData: domainData, iceDomainData: iceDomainData, domainType: domainType, DgDomainData: DgDomainData, DgDomainType: DgDomainType };
}
exports.getDomainData = getDomainData;
function normalizeVersion(version) {
    var parsed = parseInt(version, 16);
    if (parsed < 27) {
        // this is because Ledger returns 0 or 1
        parsed += 27;
    }
    if (parsed !== 27 && parsed !== 28) {
        //throw Error(Invalid signature version "${version}" (parsed: ${parsed}))
    }
    return parsed.toString(16);
}
exports.normalizeVersion = normalizeVersion;
function getExecuteMetaTransactionData(account, fullSignature, functionSignature) {
    var signature = fullSignature.replace("0x", "");
    var r = signature.substring(0, 64);
    var s = signature.substring(64, 128);
    var v = normalizeVersion(signature.substring(128, 130));
    var method = functionSignature.replace("0x", "");
    var signatureLength = (method.length / 2).toString(16);
    var signaturePadding = Math.ceil(method.length / 64);
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
exports.getExecuteMetaTransactionData = getExecuteMetaTransactionData;
var isUrl = function (str) {
    var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    return pattern.test(str);
};
exports.isUrl = isUrl;
//# sourceMappingURL=DGUtils.util.js.map