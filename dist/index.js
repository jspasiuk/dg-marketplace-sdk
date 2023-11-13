"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICE_ADDRESS = exports.CONTRACT_ABI = exports.CONTRACT_ADDRESS = exports.DGMarketplaceInstance = void 0;
var DGMarketplace_class_1 = __importDefault(require("./class/DGMarketplace.class"));
var constants_1 = require("./constants");
Object.defineProperty(exports, "CONTRACT_ADDRESS", { enumerable: true, get: function () { return constants_1.CONTRACT_ADDRESS; } });
Object.defineProperty(exports, "CONTRACT_ABI", { enumerable: true, get: function () { return constants_1.CONTRACT_ABI; } });
Object.defineProperty(exports, "ICE_ADDRESS", { enumerable: true, get: function () { return constants_1.ICE_ADDRESS; } });
var DGMarketplaceInstance = new DGMarketplace_class_1.default();
exports.DGMarketplaceInstance = DGMarketplaceInstance;
//# sourceMappingURL=index.js.map