"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var DGUtils_util_1 = require("../utils/DGUtils.util");
var constants_1 = require("../constants");
var DGMarketplace = /** @class */ (function () {
    function DGMarketplace() {
        this.apiUrl = "";
        this.gasServerUrl = "";
        this.polygonRpcProvider = "";
        this.theGraphUrl = "";
        this.iceValue = "";
        this.userIceBalance = 0;
        this.userIceAllowance = 0;
        this.walletProviderType = "";
        this.contractAddress = "";
        this.iceAddress = "";
        this.switchIpfsUri = function (url) {
            var ipfsRegex = /^(?:https?:\/\/)?(?:(?:\w+\.)?ipfs\.(?:dweb\.link|(?:\w+\.)?[a-zA-Z]+)|localhost)(?::\d{2,5})?\/(?:ipfs\/)?(Qm[a-zA-Z0-9]{44})/;
            var nativeIpfsRegex = /^ipfs:\/\/(Qm[a-zA-Z0-9]{44})/;
            var nativeIpfsIpfsRegex = /^ipfs:\/\/ipfs\/(Qm[a-zA-Z0-9]{44})(\/.+)?/;
            var ipfsMatch = url.match(ipfsRegex);
            var nativeIpfsMatch = url.match(nativeIpfsRegex);
            var nativeIpfsIpfsMatch = url.match(nativeIpfsIpfsRegex);
            var cid = null;
            if (ipfsMatch) {
                cid = ipfsMatch[1];
            }
            else if (nativeIpfsMatch) {
                cid = nativeIpfsMatch[1];
            }
            else if (nativeIpfsIpfsMatch) {
                nativeIpfsIpfsMatch.shift();
                cid = nativeIpfsIpfsMatch.join("");
            }
            if (cid) {
                return "".concat(constants_1.IPFS_PUBLIC_URL).concat(cid);
            }
            else {
                return url;
            }
        };
    }
    DGMarketplace.prototype.init = function (_a) {
        var apiUrl = _a.apiUrl, gasServerUrl = _a.gasServerUrl, polygonRpcProvider = _a.polygonRpcProvider, contractAddress = _a.contractAddress, iceAddress = _a.iceAddress, theGraphUrl = _a.theGraphUrl;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.apiUrl = apiUrl;
                        this.gasServerUrl = gasServerUrl;
                        this.polygonRpcProvider = polygonRpcProvider;
                        this.contractAddress = contractAddress;
                        this.iceAddress = iceAddress;
                        this.theGraphUrl = theGraphUrl;
                        return [4 /*yield*/, this.getIceValue()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.initProvider = function (walletProvider, walletProviderType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.walletProvider = walletProvider;
                this.walletProviderType = walletProviderType;
                return [2 /*return*/];
            });
        });
    };
    DGMarketplace.prototype.getIceAllowance = function (userWallet) {
        return __awaiter(this, void 0, void 0, function () {
            var iceAllowance, balance, balanceFormatted, allowedIce;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iceContract.allowance(userWallet, this.contractAddress)];
                    case 1:
                        iceAllowance = _a.sent();
                        return [4 /*yield*/, this.iceContract.balanceOf(userWallet)];
                    case 2:
                        balance = _a.sent();
                        balanceFormatted = ethers_1.ethers.utils.formatEther(balance.toString());
                        this.userIceBalance = Math.round(+balanceFormatted * 1e4) / 1e4;
                        allowedIce = ethers_1.ethers.utils.formatEther(iceAllowance.toString());
                        this.userIceAllowance = Math.round(+allowedIce * 1e4) / 1e4;
                        return [2 /*return*/, { balance: this.userIceBalance, allowance: this.userIceAllowance }];
                }
            });
        });
    };
    DGMarketplace.prototype.validateConnection = function () {
        if (this.apiUrl === "") {
            throw new Error("Backend URL is not set");
        }
    };
    DGMarketplace.prototype.getContract = function (userAddress) {
        if (!this.polygonRpcProvider) {
            throw new Error("Polygon RPC provider URL is not set");
        }
        try {
            var provider = new ethers_1.ethers.providers.JsonRpcProvider(this.polygonRpcProvider);
            var signer = provider.getSigner(userAddress);
            var contract = new ethers_1.ethers.Contract(this.contractAddress, constants_1.CONTRACT_ABI, signer);
            var iceContract = new ethers_1.ethers.Contract(this.iceAddress, constants_1.ABI_20, signer);
            this.polygonProvider = provider;
            this.iceContract = iceContract;
            this.contract = contract;
            this.signer = signer;
            return { signer: signer, contract: contract };
        }
        catch (error) {
            throw error;
        }
    };
    DGMarketplace.prototype.getIceValue = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.get("/stripe/ice-price")];
                    case 1:
                        response = _d.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _d.sent();
                        this.iceValue = ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.quote) === null || _b === void 0 ? void 0 : _b.USD) === null || _c === void 0 ? void 0 : _c.price) || 0;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _d.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getUserPublishedTokens = function (sellerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, Tokens, _i, _a, token, image, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.validateConnection();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.get("/user/nfts/".concat(sellerAddress))];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _b.sent();
                        Tokens = [];
                        for (_i = 0, _a = data.data; _i < _a.length; _i++) {
                            token = _a[_i];
                            image = this.switchIpfsUri(token.imageUrl);
                            Tokens.push({
                                tokenId: token.tokenId,
                                address: token.nftAddress,
                                name: token.name,
                                symbol: token.symbol,
                                resourceId: token.resourceId,
                                image: image,
                                price: token.price,
                            });
                        }
                        return [2 /*return*/, Tokens];
                    case 4:
                        error_2 = _b.sent();
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getCollections = function (_a) {
        var _b = _a.limit, limit = _b === void 0 ? 100 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c, _d = _a.orderBy, orderBy = _d === void 0 ? null : _d, _e = _a.filter, filter = _e === void 0 ? null : _e;
        return __awaiter(this, void 0, void 0, function () {
            var orderByQuery, filterQuery, query, response, Collections, _i, _f, collection, CollectionImages, _g, _h, token, tokenUri, metadataInfo, metadata, error_3, error_4;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.validateConnection();
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 13, , 14]);
                        orderByQuery = orderBy
                            ? "orderBy: ".concat(orderBy, ",orderDirection: desc")
                            : "";
                        filterQuery = filter
                            ? "where: { ".concat(filter, ", hasNftsForSale: true }")
                            : "where: { hasNftsForSale: true }";
                        query = "\n      {\n        nftaddresses(first: ".concat(limit, ", skip: ").concat(offset, " ").concat(orderByQuery, " ").concat(filterQuery, ") {\n          id\n          collectionName\n          collectionSymbol\n          collectionType\n          profilePicture\n          profilePortrait\n          floorPrice\n          verified\n          NFTs(first: 1) {\n            tokenURI\n          }\n        }\n      }");
                        return [4 /*yield*/, this.getGraphQuery(query)];
                    case 2:
                        response = _j.sent();
                        Collections = [];
                        _i = 0, _f = response.data.nftaddresses;
                        _j.label = 3;
                    case 3:
                        if (!(_i < _f.length)) return [3 /*break*/, 12];
                        collection = _f[_i];
                        _j.label = 4;
                    case 4:
                        _j.trys.push([4, 10, , 11]);
                        CollectionImages = [];
                        if (!collection.NFTs) return [3 /*break*/, 9];
                        _g = 0, _h = collection.NFTs;
                        _j.label = 5;
                    case 5:
                        if (!(_g < _h.length)) return [3 /*break*/, 9];
                        token = _h[_g];
                        tokenUri = this.switchIpfsUri(token.tokenURI);
                        return [4 /*yield*/, fetch(tokenUri)];
                    case 6:
                        metadataInfo = _j.sent();
                        return [4 /*yield*/, metadataInfo.json()];
                    case 7:
                        metadata = _j.sent();
                        CollectionImages.push(this.switchIpfsUri(metadata.image));
                        _j.label = 8;
                    case 8:
                        _g++;
                        return [3 /*break*/, 5];
                    case 9:
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
                        return [3 /*break*/, 11];
                    case 10:
                        error_3 = _j.sent();
                        console.error(error_3);
                        return [3 /*break*/, 11];
                    case 11:
                        _i++;
                        return [3 /*break*/, 3];
                    case 12: return [2 /*return*/, Collections];
                    case 13:
                        error_4 = _j.sent();
                        throw error_4;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getCollectionsFromDG = function (_a) {
        var sellerAddress = _a.sellerAddress, collectionName = _a.collectionName, limit = _a.limit, offset = _a.offset, filterCollections = _a.filterCollections;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, Collections, _i, _b, collection, CollectionImages, _c, _d, image, error_5;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.validateConnection();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 4, , 5]);
                        url = "/marketplace/collections?1=1";
                        url += sellerAddress ? "&sellerAddress=".concat(sellerAddress) : "";
                        url += collectionName ? "&name=".concat(collectionName) : "";
                        url += limit ? "&limit=".concat(limit) : "";
                        url += offset ? "&offset=".concat(offset) : "";
                        url += filterCollections ? "&nftAddress=".concat(filterCollections) : "";
                        return [4 /*yield*/, this.get(url)];
                    case 2:
                        response = _e.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _e.sent();
                        Collections = [];
                        for (_i = 0, _b = data.data.marketplaceCollections; _i < _b.length; _i++) {
                            collection = _b[_i];
                            CollectionImages = [];
                            if (collection.images) {
                                for (_c = 0, _d = collection.images; _c < _d.length; _c++) {
                                    image = _d[_c];
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
                        return [2 /*return*/, Collections];
                    case 4:
                        error_5 = _e.sent();
                        throw error_5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getGroups = function (collectionAddress, order, limit, offset, name, sellerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, Groups, _i, _a, group, image, price, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.validateConnection();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        url = "";
                        if (sellerAddress) {
                            url = "/marketplace/user-listings-by-collection/".concat(sellerAddress, "/").concat(collectionAddress, "?1=1");
                        }
                        else {
                            url = "/marketplace?nftAddress=".concat(collectionAddress);
                        }
                        url += order ? "&price=".concat(order) : "";
                        url += limit ? "&limit=".concat(limit) : "";
                        url += offset ? "&offset=".concat(offset) : "";
                        url += name ? "&name=".concat(name) : "";
                        return [4 /*yield*/, this.get(url)];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _b.sent();
                        Groups = [];
                        for (_i = 0, _a = data.data.marketplaceListings; _i < _a.length; _i++) {
                            group = _a[_i];
                            image = this.switchIpfsUri(group.imageUrl);
                            price = group.price;
                            Groups.push({
                                address: group.nftAddress,
                                name: group.name,
                                image: image,
                                tokenId: group.tokenId,
                                price: price,
                                priceUsd: (+price * +this.iceValue).toFixed(2),
                                isVerifiedCreator: group.isVerifiedCreator,
                                contractType: group.contractType,
                                symbol: group.symbol,
                                description: group.description,
                                sellerAddress: group.sellerAddress,
                                resourceId: group.resourceId,
                            });
                        }
                        return [2 /*return*/, Groups];
                    case 4:
                        error_6 = _b.sent();
                        throw error_6;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getTokens = function (collectionAddress, groupId, sellerAddress, limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, Tokens, _i, _a, token, image, price, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.validateConnection();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        url = "/marketplace/collection/".concat(collectionAddress, "/").concat(groupId, "?1=1");
                        url += sellerAddress ? "&sellerAddress=".concat(sellerAddress) : "";
                        url += limit ? "&limit=".concat(limit) : "";
                        url += offset ? "&offset=".concat(offset) : "";
                        return [4 /*yield*/, this.get(url)];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _b.sent();
                        Tokens = [];
                        for (_i = 0, _a = data.data.marketplaceCollections; _i < _a.length; _i++) {
                            token = _a[_i];
                            image = this.switchIpfsUri(token.image);
                            price = token.price;
                            Tokens.push({
                                address: token.nftAddress,
                                name: token.name,
                                image: image,
                                tokenId: token.tokenId,
                                price: price,
                                priceUsd: (+price * +this.iceValue).toFixed(2),
                                symbol: token.symbol,
                                description: token.description,
                                sellerAddress: token.sellerAddress,
                                resourceId: token.resourceId,
                            });
                        }
                        return [2 /*return*/, Tokens];
                    case 4:
                        error_7 = _b.sent();
                        throw error_7;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getPaymentLink = function (platform, buyerAddress, tokenAddress, tokenId, resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, response, data, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateConnection();
                        return [4 /*yield*/, this.validateListing(tokenAddress, tokenId)];
                    case 1:
                        isValid = _a.sent();
                        if (!isValid) {
                            throw new Error("Invalid listing");
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        switch (platform) {
                            case "paper":
                            case "coinbase":
                            case "binance":
                                break;
                            default:
                                throw new Error("Invalid platform");
                        }
                        return [4 /*yield*/, this.get("/".concat(platform, "/payment-link?nftAddress=").concat(tokenAddress, "&buyerAddress=").concat(buyerAddress, "&tokenId=").concat(tokenId, "&resourceId=").concat(resourceId, "&currency=USDT"))];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        return [2 /*return*/, data.data];
                    case 5:
                        error_8 = _a.sent();
                        throw error_8;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.buyItem = function (userAddress, tokenAddress, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, approveHex, _a, domainData, domainType, nonce, message, dataToSign, userSignature, serverPayload, response, data, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.validateListing(tokenAddress, tokenId)];
                    case 1:
                        isValid = _b.sent();
                        if (!isValid) {
                            throw new Error("Invalid listing");
                        }
                        return [4 /*yield*/, this.contract.populateTransaction.buy(tokenAddress, [tokenId])];
                    case 2:
                        approveHex = _b.sent();
                        _a = (0, DGUtils_util_1.getDomainData)(this.contractAddress, this.contractAddress, userAddress), domainData = _a.domainData, domainType = _a.domainType;
                        return [4 /*yield*/, this.contract.getNonce(userAddress)];
                    case 3:
                        nonce = _b.sent();
                        message = {
                            nonce: nonce.toString(),
                            from: userAddress,
                            functionSignature: approveHex.data,
                        };
                        dataToSign = JSON.stringify({
                            types: {
                                EIP712Domain: domainType,
                                MetaTransaction: DGUtils_util_1.metaTransactionType,
                            },
                            domain: domainData,
                            primaryType: "MetaTransaction",
                            message: message,
                        });
                        return [4 /*yield*/, this.requestUserSignature(userAddress, dataToSign)];
                    case 4:
                        userSignature = _b.sent();
                        serverPayload = JSON.stringify({
                            transactionData: {
                                from: userAddress,
                                params: [
                                    this.contractAddress,
                                    (0, DGUtils_util_1.getExecuteMetaTransactionData)(userAddress, userSignature, approveHex.data),
                                ],
                            },
                        });
                        return [4 /*yield*/, this.post(this.gasServerUrl, serverPayload)];
                    case 5:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 6:
                        data = _b.sent();
                        if (data.ok === false) {
                            throw new Error(data.message);
                        }
                        return [2 /*return*/, data];
                    case 7:
                        error_9 = _b.sent();
                        throw error_9;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.validateListing = function (tokenAddress, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.contract.getOrderActive(tokenAddress, tokenId)];
                    case 1:
                        isValid = _a.sent();
                        return [2 /*return*/, isValid];
                    case 2:
                        error_10 = _a.sent();
                        throw error_10;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.sendAsGift = function (userAddress, giftAddress, tokenAddress, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var approveHex, _a, domainData, domainType, nonce, message, dataToSign, userSignature, serverPayload, response, data, error_11;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.contract.populateTransaction.buyForGift(tokenAddress, [tokenId], giftAddress)];
                    case 1:
                        approveHex = _b.sent();
                        _a = (0, DGUtils_util_1.getDomainData)(this.contractAddress, this.contractAddress, userAddress), domainData = _a.domainData, domainType = _a.domainType;
                        return [4 /*yield*/, this.contract.getNonce(userAddress)];
                    case 2:
                        nonce = _b.sent();
                        message = {
                            nonce: nonce.toString(),
                            from: userAddress,
                            functionSignature: approveHex.data,
                        };
                        dataToSign = JSON.stringify({
                            types: {
                                EIP712Domain: domainType,
                                MetaTransaction: DGUtils_util_1.metaTransactionType,
                            },
                            domain: domainData,
                            primaryType: "MetaTransaction",
                            message: message,
                        });
                        return [4 /*yield*/, this.requestUserSignature(userAddress, dataToSign)];
                    case 3:
                        userSignature = _b.sent();
                        serverPayload = JSON.stringify({
                            transactionData: {
                                from: userAddress,
                                params: [
                                    this.contractAddress,
                                    (0, DGUtils_util_1.getExecuteMetaTransactionData)(userAddress, userSignature, approveHex.data),
                                ],
                            },
                        });
                        return [4 /*yield*/, this.post(this.gasServerUrl, serverPayload)];
                    case 4:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 5:
                        data = _b.sent();
                        if (data.ok === false) {
                            throw new Error(data.message);
                        }
                        return [2 /*return*/, data];
                    case 6:
                        error_11 = _b.sent();
                        throw error_11;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.cancelPublishedItem = function (metamaskProvider, userAddress, tokenAddress, tokenIdArray) {
        return __awaiter(this, void 0, void 0, function () {
            var i, tokenId, isValid, approveHex, _a, domainData, domainType, nonce, message, dataToSign, metamaskSignature, serverPayload, response, data, error_12;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < tokenIdArray.length)) return [3 /*break*/, 4];
                        tokenId = tokenIdArray[i];
                        return [4 /*yield*/, this.validateListing(tokenAddress, tokenId)];
                    case 2:
                        isValid = _b.sent();
                        if (!isValid) {
                            throw new Error("Invalid listing");
                        }
                        _b.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, this.contract.populateTransaction.cancel(tokenAddress, tokenIdArray)];
                    case 5:
                        approveHex = _b.sent();
                        _a = (0, DGUtils_util_1.getDomainData)(this.contractAddress, this.contractAddress, userAddress), domainData = _a.domainData, domainType = _a.domainType;
                        return [4 /*yield*/, this.contract.getNonce(userAddress)];
                    case 6:
                        nonce = _b.sent();
                        message = {
                            nonce: nonce.toString(),
                            from: userAddress,
                            functionSignature: approveHex.data,
                        };
                        dataToSign = JSON.stringify({
                            types: {
                                EIP712Domain: domainType,
                                MetaTransaction: DGUtils_util_1.metaTransactionType,
                            },
                            domain: domainData,
                            primaryType: "MetaTransaction",
                            message: message,
                        });
                        return [4 /*yield*/, metamaskProvider.request({
                                method: "eth_signTypedData_v4",
                                params: [userAddress, dataToSign],
                                jsonrpc: "2.0",
                                id: 999999999999,
                            })];
                    case 7:
                        metamaskSignature = _b.sent();
                        serverPayload = JSON.stringify({
                            transactionData: {
                                from: userAddress,
                                params: [
                                    this.contractAddress,
                                    (0, DGUtils_util_1.getExecuteMetaTransactionData)(userAddress, metamaskSignature, approveHex.data),
                                ],
                            },
                        });
                        return [4 /*yield*/, this.post(this.gasServerUrl, serverPayload)];
                    case 8:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 9:
                        data = _b.sent();
                        if (data.ok === false) {
                            throw new Error(data.message);
                        }
                        return [2 /*return*/, data];
                    case 10:
                        error_12 = _b.sent();
                        throw error_12;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.approveContractIce = function (userWallet) {
        return __awaiter(this, void 0, void 0, function () {
            var approveHex, _a, iceDomainData, ICEdomainType, nonce, message, dataToSign, userSignature, serverPayload, response, data, error_13;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.iceContract.populateTransaction.approve(this.contractAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")];
                    case 1:
                        approveHex = _b.sent();
                        _a = (0, DGUtils_util_1.getDomainData)(this.iceAddress, this.iceAddress, ""), iceDomainData = _a.iceDomainData, ICEdomainType = _a.ICEdomainType;
                        return [4 /*yield*/, this.iceContract.getNonce(userWallet)];
                    case 2:
                        nonce = _b.sent();
                        message = {
                            nonce: nonce.toString(),
                            from: userWallet,
                            functionSignature: approveHex.data,
                        };
                        dataToSign = JSON.stringify({
                            types: {
                                EIP712Domain: ICEdomainType,
                                MetaTransaction: DGUtils_util_1.metaTransactionType,
                            },
                            domain: iceDomainData,
                            primaryType: "MetaTransaction",
                            message: message,
                        });
                        return [4 /*yield*/, this.requestUserSignature(userWallet, dataToSign)];
                    case 3:
                        userSignature = _b.sent();
                        serverPayload = JSON.stringify({
                            transactionData: {
                                from: userWallet,
                                params: [
                                    this.iceAddress,
                                    (0, DGUtils_util_1.getExecuteMetaTransactionData)(userWallet, userSignature, approveHex.data),
                                ],
                            },
                        });
                        return [4 /*yield*/, this.post(this.gasServerUrl, serverPayload)];
                    case 4:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 5:
                        data = _b.sent();
                        if (data.ok === false) {
                            throw new Error(data.message);
                        }
                        return [2 /*return*/, data];
                    case 6:
                        error_13 = _b.sent();
                        throw error_13;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getTransactionStatus = function (txnHash) {
        return __awaiter(this, void 0, void 0, function () {
            var txReceipt, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.polygonProvider.getTransactionReceipt(txnHash)];
                    case 1:
                        txReceipt = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!!txReceipt) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.polygonProvider.waitForTransaction(txnHash)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.polygonProvider.getTransactionReceipt(txnHash)];
                    case 4:
                        txReceipt = _a.sent();
                        return [3 /*break*/, 2];
                    case 5:
                        if (txReceipt.status === 1) {
                            return [2 /*return*/, { txReceipt: txReceipt, status: true }];
                        }
                        else {
                            return [2 /*return*/, { txReceipt: txReceipt, status: false }];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_14 = _a.sent();
                        throw error_14;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getCoinbaseStatus = function (paymentCode) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.get("/coinbase/payment-status?code=".concat(paymentCode))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        error_15 = _a.sent();
                        throw error_15;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.getTokenMetadata = function (collectionAddress, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, contract, tokenUri, fixedUri, response, data, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        provider = new ethers_1.ethers.providers.JsonRpcProvider(this.polygonRpcProvider);
                        contract = new ethers_1.ethers.Contract(collectionAddress, constants_1.ERC721CollectionV2, provider);
                        return [4 /*yield*/, contract.tokenURI(tokenId)];
                    case 1:
                        tokenUri = _a.sent();
                        if (!(0, DGUtils_util_1.isUrl)(tokenUri)) return [3 /*break*/, 4];
                        fixedUri = this.switchIpfsUri(tokenUri);
                        return [4 /*yield*/, fetch(fixedUri)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4: throw new Error("Invalid token URI");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_16 = _a.sent();
                        throw error_16;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch("".concat(this.apiUrl).concat(url), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })];
            });
        });
    };
    DGMarketplace.prototype.post = function (url, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch("".concat(url), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: body,
                    })];
            });
        });
    };
    DGMarketplace.prototype.getGraphQuery = function (graphqlQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.theGraphUrl, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ query: graphqlQuery }),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("HTTP error! Status: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        error_17 = _a.sent();
                        throw error_17;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DGMarketplace.prototype.requestUserSignature = function (userWallet, dataToSign) {
        return __awaiter(this, void 0, void 0, function () {
            var status, _a, etherProvider, signer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.walletProviderType;
                        switch (_a) {
                            case "metamask": return [3 /*break*/, 1];
                            case "web3auth": return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.walletProvider.request({
                            method: "eth_signTypedData_v4",
                            params: [userWallet, dataToSign],
                            jsonrpc: "2.0",
                            id: 999999999999,
                        })];
                    case 2:
                        status = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        etherProvider = new ethers_1.ethers.providers.Web3Provider(this.walletProvider);
                        signer = etherProvider.getSigner();
                        return [4 /*yield*/, signer.provider.send("eth_signTypedData_v4", [
                                userWallet,
                                dataToSign,
                            ])];
                    case 4:
                        status = _b.sent();
                        return [3 /*break*/, 6];
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, status];
                }
            });
        });
    };
    return DGMarketplace;
}());
exports.default = DGMarketplace;
//# sourceMappingURL=DGMarketplace.class.js.map