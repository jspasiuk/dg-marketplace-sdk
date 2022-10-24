export const CONTRACT_ADDRESS = "0x4F9FeB711b6C05DEd8751763B249bd782815f1CA";
export const ICE_ADDRESS = "0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c";

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa5ec9c1b",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_acceptedToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_paperKeyManagerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "Buy",
    type: "event",
    signature:
      "0xe1c0970685abcf73b8059c2ccfd130fa4bcbfec8017f92caea459eab09dee10a",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
    ],
    name: "buyForGift",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x5e45e63a",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
    ],
    name: "BuyForGift",
    type: "event",
    signature:
      "0xf31c200de0f920403f45a692fd1b53a816a8062c8690f416f23a6287ee7e5a5f",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf9f629c5",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "Cancel",
    type: "event",
    signature:
      "0x3385b111ba5421f51c9dc5eb7eb149df700a9c81e0a424f2d41068f3339bc465",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x0c53c51c",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
    signature:
      "0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x150b7a02",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "paymentId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_nonce",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "paperCallback",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0xf99ddf62",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_nonce",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "paperCallback2",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x45fd7359",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_paymentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "PaperPurchase",
    type: "event",
    signature:
      "0xd16e0c349dce186abafca219ee0ff5940630e9503b4cb3b25f9ac94d456d2e8d",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "PaperPurchase2",
    type: "event",
    signature:
      "0x66bb234426848bd542165a3323ef08a652fa8e1b3fbcd18ac6223aa6450c2fdb",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_paperKey",
        type: "address",
      },
    ],
    name: "registerPaperKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x60febc8c",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x715018a6",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf1f94596",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
    ],
    name: "Sell",
    type: "event",
    signature:
      "0x2921a0e24071efdc9e142fd3ba357c526f391c0685d5911034e5bc5a33644459",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_backWallet",
        type: "address",
      },
    ],
    name: "setBackWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xba3b412a",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x69fe0e2d",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "SetFee",
    type: "event",
    signature:
      "0x032dc6a2d839eb179729a55633fdf1c41a1fc4739394154117005db2b354b9b5",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newFeeOwner",
        type: "address",
      },
    ],
    name: "setFeeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x4b104eff",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldFeeOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newFeeOwner",
        type: "address",
      },
    ],
    name: "SetFeeOwner",
    type: "event",
    signature:
      "0xe0bbf1a07376101b84e5aff236bc710878c9a975168510f821b4a735c0d35e51",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3011e16a",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "SetPrice",
    type: "event",
    signature:
      "0x842cd33d5c4fbd27ed76fdff678fdf5fe0bdf26805132b8cd2ac5b5e7f204549",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b",
  },
  {
    stateMutability: "payable",
    type: "fallback",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa1db9782",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "withdrawERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf3e414f8",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x451c3d80",
  },
  {
    inputs: [],
    name: "backWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xc7a7942c",
  },
  {
    inputs: [],
    name: "BASE_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x3d18651e",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
    ],
    name: "checkCreator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xbd1bdd04",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
    ],
    name: "checkInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x5455bce2",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "checkTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x0084f1f7",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xddca3f43",
  },
  {
    inputs: [],
    name: "feeOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xb9818be1",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x2d0335ab",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x449e815d",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "getRoyalty",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xf533b802",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "isActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xd266e83b",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderbook",
    outputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xc7d0862d",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x8da5cb5b",
  },
];

export const ABI_TO_CREATE = `[{"inputs":[{"internalType":"string","name":"nftCollection","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint96","name":"royaltyFee","type":"uint96"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint96","name":"royaltyFee","type":"uint96"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
export const BYTECODE_TO_CREATE = `60806040523480156200001157600080fd5b5060405162004e9a38038062004e9a8339818101604052810190620000379190620005dc565b6040518060400160405280601081526020017f44474e4654436f6c6c656374696f6e73000000000000000000000000000000008152506040518060400160405280600481526020017f76312e300000000000000000000000000000000000000000000000000000000081525084848160009081620000b69190620008c1565b508060019081620000c89190620008c1565b505050620000eb620000df6200017c60201b60201c565b6200018460201b60201c565b60405180608001604052806052815260200162004e486052913980519060200120828051906020012082805190602001206200012c6200024a60201b60201c565b306040516020016200014395949392919062000a19565b60405160208183030381529060405280519060200120600a8190555050506200017333826200025360201b60201c565b50505062000b91565b600033905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006001905090565b62000263620003f660201b60201c565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff161115620002c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bb9062000afd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000336576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200032d9062000b6f565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff16815250600760008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055509050505050565b6000612710905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000469826200041e565b810181811067ffffffffffffffff821117156200048b576200048a6200042f565b5b80604052505050565b6000620004a062000400565b9050620004ae82826200045e565b919050565b600067ffffffffffffffff821115620004d157620004d06200042f565b5b620004dc826200041e565b9050602081019050919050565b60005b8381101562000509578082015181840152602081019050620004ec565b60008484015250505050565b60006200052c6200052684620004b3565b62000494565b9050828152602081018484840111156200054b576200054a62000419565b5b62000558848285620004e9565b509392505050565b600082601f83011262000578576200057762000414565b5b81516200058a84826020860162000515565b91505092915050565b60006bffffffffffffffffffffffff82169050919050565b620005b68162000593565b8114620005c257600080fd5b50565b600081519050620005d681620005ab565b92915050565b600080600060608486031215620005f857620005f76200040a565b5b600084015167ffffffffffffffff8111156200061957620006186200040f565b5b620006278682870162000560565b935050602084015167ffffffffffffffff8111156200064b576200064a6200040f565b5b620006598682870162000560565b92505060406200066c86828701620005c5565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006c957607f821691505b602082108103620006df57620006de62000681565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007497fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200070a565b6200075586836200070a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620007a26200079c62000796846200076d565b62000777565b6200076d565b9050919050565b6000819050919050565b620007be8362000781565b620007d6620007cd82620007a9565b84845462000717565b825550505050565b600090565b620007ed620007de565b620007fa818484620007b3565b505050565b5b81811015620008225762000816600082620007e3565b60018101905062000800565b5050565b601f82111562000871576200083b81620006e5565b6200084684620006fa565b8101602085101562000856578190505b6200086e6200086585620006fa565b830182620007ff565b50505b505050565b600082821c905092915050565b6000620008966000198460080262000876565b1980831691505092915050565b6000620008b1838362000883565b9150826002028217905092915050565b620008cc8262000676565b67ffffffffffffffff811115620008e857620008e76200042f565b5b620008f48254620006b0565b6200090182828562000826565b600060209050601f83116001811462000939576000841562000924578287015190505b620009308582620008a3565b865550620009a0565b601f1984166200094986620006e5565b60005b8281101562000973578489015182556001820191506020850194506020810190506200094c565b868310156200099357848901516200098f601f89168262000883565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b620009bd81620009a8565b82525050565b620009ce816200076d565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000a0182620009d4565b9050919050565b62000a1381620009f4565b82525050565b600060a08201905062000a306000830188620009b2565b62000a3f6020830187620009b2565b62000a4e6040830186620009b2565b62000a5d6060830185620009c3565b62000a6c608083018462000a08565b9695505050505050565b600082825260208201905092915050565b7f455243323938313a20726f79616c7479206665652077696c6c2065786365656460008201527f2073616c65507269636500000000000000000000000000000000000000000000602082015250565b600062000ae5602a8362000a76565b915062000af28262000a87565b604082019050919050565b6000602082019050818103600083015262000b188162000ad6565b9050919050565b7f455243323938313a20696e76616c696420726563656976657200000000000000600082015250565b600062000b5760198362000a76565b915062000b648262000b1f565b602082019050919050565b6000602082019050818103600083015262000b8a8162000b48565b9050919050565b6142a78062000ba16000396000f3fe6080604052600436106101355760003560e01c806342966c68116100ab57806395d89b411161006f57806395d89b411461043c578063a22cb46514610467578063b88d4fde14610490578063c87b56dd146104b9578063e985e9c5146104f6578063f2fde38b1461053357610135565b806342966c68146103575780636352211e1461038057806370a08231146103bd578063715018a6146103fa5780638da5cb5b1461041157610135565b80631b2a61b7116100fd5780631b2a61b71461023857806323b872dd146102615780632890e0d71461028a5780632a55205a146102b35780632d0335ab146102f157806342842e0e1461032e57610135565b806301ffc9a71461013a57806306fdde0314610177578063081812fc146101a2578063095ea7b3146101df5780630c53c51c14610208575b600080fd5b34801561014657600080fd5b50610161600480360381019061015c91906127e5565b61055c565b60405161016e919061282d565b60405180910390f35b34801561018357600080fd5b5061018c61056e565b60405161019991906128d8565b60405180910390f35b3480156101ae57600080fd5b506101c960048036038101906101c49190612930565b610600565b6040516101d6919061299e565b60405180910390f35b3480156101eb57600080fd5b50610206600480360381019061020191906129e5565b610646565b005b610222600480360381019061021d9190612bc9565b61075d565b60405161022f9190612cb5565b60405180910390f35b34801561024457600080fd5b5061025f600480360381019061025a9190612dbc565b6109c8565b005b34801561026d57600080fd5b5061028860048036038101906102839190612e2b565b610a0d565b005b34801561029657600080fd5b506102b160048036038101906102ac9190612930565b610a6d565b005b3480156102bf57600080fd5b506102da60048036038101906102d59190612e7e565b610a79565b6040516102e8929190612ecd565b60405180910390f35b3480156102fd57600080fd5b5061031860048036038101906103139190612ef6565b610c63565b6040516103259190612f23565b60405180910390f35b34801561033a57600080fd5b5061035560048036038101906103509190612e2b565b610cac565b005b34801561036357600080fd5b5061037e60048036038101906103799190612930565b610ccc565b005b34801561038c57600080fd5b506103a760048036038101906103a29190612930565b610d28565b6040516103b4919061299e565b60405180910390f35b3480156103c957600080fd5b506103e460048036038101906103df9190612ef6565b610dd9565b6040516103f19190612f23565b60405180910390f35b34801561040657600080fd5b5061040f610e90565b005b34801561041d57600080fd5b50610426610ea4565b604051610433919061299e565b60405180910390f35b34801561044857600080fd5b50610451610ece565b60405161045e91906128d8565b60405180910390f35b34801561047357600080fd5b5061048e60048036038101906104899190612f6a565b610f60565b005b34801561049c57600080fd5b506104b760048036038101906104b29190612faa565b610f76565b005b3480156104c557600080fd5b506104e060048036038101906104db9190612930565b610fd8565b6040516104ed91906128d8565b60405180910390f35b34801561050257600080fd5b5061051d6004803603810190610518919061302d565b610fea565b60405161052a919061282d565b60405180910390f35b34801561053f57600080fd5b5061055a60048036038101906105559190612ef6565b61107e565b005b600061056782611101565b9050919050565b60606000805461057d9061309c565b80601f01602080910402602001604051908101604052809291908181526020018280546105a99061309c565b80156105f65780601f106105cb576101008083540402835291602001916105f6565b820191906000526020600020905b8154815290600101906020018083116105d957829003601f168201915b5050505050905090565b600061060b8261117b565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061065182610d28565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b89061313f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106e06111c6565b73ffffffffffffffffffffffffffffffffffffffff16148061070f575061070e816107096111c6565b610fea565b5b61074e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610745906131d1565b60405180910390fd5b61075883836111ce565b505050565b606060006040518060600160405280600b60008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781525090506107e08782878787611287565b61081f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081690613263565b60405180910390fd5b6001600b60008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461086b91906132b2565b600b60008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000803073ffffffffffffffffffffffffffffffffffffffff16888a6040516020016108db92919061336a565b6040516020818303038152906040526040516108f79190613392565b6000604051808303816000865af19150503d8060008114610934576040519150601f19603f3d011682016040523d82523d6000602084013e610939565b606091505b50915091508161097e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610975906133f5565b60405180910390fd5b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b89338a6040516109b193929190613436565b60405180910390a180935050505095945050505050565b6109d0611395565b60006109dc600c611413565b90506109e8600c611421565b6109f28482611437565b6109fc8184611455565b610a078133846114c2565b50505050565b610a1e610a186111c6565b82611669565b610a5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a54906134e6565b60405180910390fd5b610a688383836116fe565b505050565b610a7681611964565b50565b6000806000600860008681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff16815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1603610c0e5760076040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff168152505090505b6000610c18611979565b6bffffffffffffffffffffffff1682602001516bffffffffffffffffffffffff1686610c449190613506565b610c4e9190613577565b90508160000151819350935050509250929050565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610cc783838360405180602001604052806000815250610f76565b505050565b610cdd610cd76111c6565b82611669565b610d1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d13906134e6565b60405180910390fd5b610d2581611964565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc7906135f4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4090613686565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610e98611395565b610ea26000611983565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610edd9061309c565b80601f0160208091040260200160405190810160405280929190818152602001828054610f099061309c565b8015610f565780601f10610f2b57610100808354040283529160200191610f56565b820191906000526020600020905b815481529060010190602001808311610f3957829003601f168201915b5050505050905090565b610f72610f6b6111c6565b8383611a49565b5050565b610f87610f816111c6565b83611669565b610fc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbd906134e6565b60405180910390fd5b610fd284848484611bb5565b50505050565b6060610fe382611c11565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611086611395565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ec90613718565b60405180910390fd5b6110fe81611983565b50565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611174575061117382611d23565b5b9050919050565b61118481611e05565b6111c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ba906135f4565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661124183610d28565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080600161129d61129888611e71565b611ed9565b848787604051600081526020016040526040516112bd9493929190613756565b6020604051602081039080840390855afa1580156112df573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361135a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611351906137e7565b60405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161491505095945050505050565b61139d6111c6565b73ffffffffffffffffffffffffffffffffffffffff166113bb610ea4565b73ffffffffffffffffffffffffffffffffffffffff1614611411576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140890613853565b60405180910390fd5b565b600081600001549050919050565b6001816000016000828254019250508190555050565b611451828260405180602001604052806000815250611f12565b5050565b61145e82611e05565b61149d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611494906138e5565b60405180910390fd5b806006600084815260200190815260200160002090816114bd9190613ab1565b505050565b6114ca611979565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff161115611528576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151f90613bf5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158e90613c61565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff168152506008600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b60008061167583610d28565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116b757506116b68185610fea565b5b806116f557508373ffffffffffffffffffffffffffffffffffffffff166116dd84610600565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661171e82610d28565b73ffffffffffffffffffffffffffffffffffffffff1614611774576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176b90613cf3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117da90613d85565b60405180910390fd5b6117ee838383611f6d565b6117f96000826111ce565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118499190613da5565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118a091906132b2565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461195f838383611f72565b505050565b61196d81611f77565b61197681611fca565b50565b6000612710905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aae90613e25565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611ba8919061282d565b60405180910390a3505050565b611bc08484846116fe565b611bcc84848484612029565b611c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c0290613eb7565b60405180910390fd5b50505050565b6060611c1c8261117b565b6000600660008481526020019081526020016000208054611c3c9061309c565b80601f0160208091040260200160405190810160405280929190818152602001828054611c689061309c565b8015611cb55780601f10611c8a57610100808354040283529160200191611cb5565b820191906000526020600020905b815481529060010190602001808311611c9857829003601f168201915b505050505090506000611cc66121b0565b90506000815103611cdb578192505050611d1e565b600082511115611d10578082604051602001611cf8929190613f13565b60405160208183030381529060405292505050611d1e565b611d19846121c7565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dee57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dfe5750611dfd8261222f565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600060405180608001604052806043815260200161422f604391398051906020012082600001518360200151846040015180519060200120604051602001611ebc9493929190613f37565b604051602081830303815290604052805190602001209050919050565b6000611ee3612299565b82604051602001611ef5929190613fe9565b604051602081830303815290604052805190602001209050919050565b611f1c83836122a3565b611f296000848484612029565b611f68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f5f90613eb7565b60405180910390fd5b505050565b505050565b505050565b611f808161247c565b6000600660008381526020019081526020016000208054611fa09061309c565b905014611fc757600660008281526020019081526020016000206000611fc6919061271c565b5b50565b60086000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505050565b600061204a8473ffffffffffffffffffffffffffffffffffffffff16612599565b156121a3578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026120736111c6565b8786866040518563ffffffff1660e01b81526004016120959493929190614020565b6020604051808303816000875af19250505080156120d157506040513d601f19601f820116820180604052508101906120ce9190614081565b60015b612153573d8060008114612101576040519150601f19603f3d011682016040523d82523d6000602084013e612106565b606091505b50600081510361214b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161214290613eb7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506121a8565b600190505b949350505050565b606060405180602001604052806000815250905090565b60606121d28261117b565b60006121dc6121b0565b905060008151116121fc5760405180602001604052806000815250612227565b80612206846125bc565b604051602001612217929190613f13565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600a54905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612312576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612309906140fa565b60405180910390fd5b61231b81611e05565b1561235b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235290614166565b60405180910390fd5b61236760008383611f6d565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123b791906132b2565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461247860008383611f72565b5050565b600061248782610d28565b905061249581600084611f6d565b6124a06000836111ce565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546124f09190613da5565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461259581600084611f72565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060008203612603576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612717565b600082905060005b6000821461263557808061261e90614186565b915050600a8261262e9190613577565b915061260b565b60008167ffffffffffffffff81111561265157612650612a2f565b5b6040519080825280601f01601f1916602001820160405280156126835781602001600182028036833780820191505090505b5090505b600085146127105760018261269c9190613da5565b9150600a856126ab91906141ce565b60306126b791906132b2565b60f81b8183815181106126cd576126cc6141ff565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856127099190613577565b9450612687565b8093505050505b919050565b5080546127289061309c565b6000825580601f1061273a5750612759565b601f016020900490600052602060002090810190612758919061275c565b5b50565b5b8082111561277557600081600090555060010161275d565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6127c28161278d565b81146127cd57600080fd5b50565b6000813590506127df816127b9565b92915050565b6000602082840312156127fb576127fa612783565b5b6000612809848285016127d0565b91505092915050565b60008115159050919050565b61282781612812565b82525050565b6000602082019050612842600083018461281e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612882578082015181840152602081019050612867565b60008484015250505050565b6000601f19601f8301169050919050565b60006128aa82612848565b6128b48185612853565b93506128c4818560208601612864565b6128cd8161288e565b840191505092915050565b600060208201905081810360008301526128f2818461289f565b905092915050565b6000819050919050565b61290d816128fa565b811461291857600080fd5b50565b60008135905061292a81612904565b92915050565b60006020828403121561294657612945612783565b5b60006129548482850161291b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006129888261295d565b9050919050565b6129988161297d565b82525050565b60006020820190506129b3600083018461298f565b92915050565b6129c28161297d565b81146129cd57600080fd5b50565b6000813590506129df816129b9565b92915050565b600080604083850312156129fc576129fb612783565b5b6000612a0a858286016129d0565b9250506020612a1b8582860161291b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612a678261288e565b810181811067ffffffffffffffff82111715612a8657612a85612a2f565b5b80604052505050565b6000612a99612779565b9050612aa58282612a5e565b919050565b600067ffffffffffffffff821115612ac557612ac4612a2f565b5b612ace8261288e565b9050602081019050919050565b82818337600083830152505050565b6000612afd612af884612aaa565b612a8f565b905082815260208101848484011115612b1957612b18612a2a565b5b612b24848285612adb565b509392505050565b600082601f830112612b4157612b40612a25565b5b8135612b51848260208601612aea565b91505092915050565b6000819050919050565b612b6d81612b5a565b8114612b7857600080fd5b50565b600081359050612b8a81612b64565b92915050565b600060ff82169050919050565b612ba681612b90565b8114612bb157600080fd5b50565b600081359050612bc381612b9d565b92915050565b600080600080600060a08688031215612be557612be4612783565b5b6000612bf3888289016129d0565b955050602086013567ffffffffffffffff811115612c1457612c13612788565b5b612c2088828901612b2c565b9450506040612c3188828901612b7b565b9350506060612c4288828901612b7b565b9250506080612c5388828901612bb4565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000612c8782612c60565b612c918185612c6b565b9350612ca1818560208601612864565b612caa8161288e565b840191505092915050565b60006020820190508181036000830152612ccf8184612c7c565b905092915050565b600067ffffffffffffffff821115612cf257612cf1612a2f565b5b612cfb8261288e565b9050602081019050919050565b6000612d1b612d1684612cd7565b612a8f565b905082815260208101848484011115612d3757612d36612a2a565b5b612d42848285612adb565b509392505050565b600082601f830112612d5f57612d5e612a25565b5b8135612d6f848260208601612d08565b91505092915050565b60006bffffffffffffffffffffffff82169050919050565b612d9981612d78565b8114612da457600080fd5b50565b600081359050612db681612d90565b92915050565b600080600060608486031215612dd557612dd4612783565b5b6000612de3868287016129d0565b935050602084013567ffffffffffffffff811115612e0457612e03612788565b5b612e1086828701612d4a565b9250506040612e2186828701612da7565b9150509250925092565b600080600060608486031215612e4457612e43612783565b5b6000612e52868287016129d0565b9350506020612e63868287016129d0565b9250506040612e748682870161291b565b9150509250925092565b60008060408385031215612e9557612e94612783565b5b6000612ea38582860161291b565b9250506020612eb48582860161291b565b9150509250929050565b612ec7816128fa565b82525050565b6000604082019050612ee2600083018561298f565b612eef6020830184612ebe565b9392505050565b600060208284031215612f0c57612f0b612783565b5b6000612f1a848285016129d0565b91505092915050565b6000602082019050612f386000830184612ebe565b92915050565b612f4781612812565b8114612f5257600080fd5b50565b600081359050612f6481612f3e565b92915050565b60008060408385031215612f8157612f80612783565b5b6000612f8f858286016129d0565b9250506020612fa085828601612f55565b9150509250929050565b60008060008060808587031215612fc457612fc3612783565b5b6000612fd2878288016129d0565b9450506020612fe3878288016129d0565b9350506040612ff48782880161291b565b925050606085013567ffffffffffffffff81111561301557613014612788565b5b61302187828801612b2c565b91505092959194509250565b6000806040838503121561304457613043612783565b5b6000613052858286016129d0565b9250506020613063858286016129d0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806130b457607f821691505b6020821081036130c7576130c661306d565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613129602183612853565b9150613134826130cd565b604082019050919050565b600060208201905081810360008301526131588161311c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006131bb603e83612853565b91506131c68261315f565b604082019050919050565b600060208201905081810360008301526131ea816131ae565b9050919050565b7f5369676e657220616e64207369676e617475726520646f206e6f74206d61746360008201527f6800000000000000000000000000000000000000000000000000000000000000602082015250565b600061324d602183612853565b9150613258826131f1565b604082019050919050565b6000602082019050818103600083015261327c81613240565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006132bd826128fa565b91506132c8836128fa565b92508282019050808211156132e0576132df613283565b5b92915050565b600081905092915050565b60006132fc82612c60565b61330681856132e6565b9350613316818560208601612864565b80840191505092915050565b60008160601b9050919050565b600061333a82613322565b9050919050565b600061334c8261332f565b9050919050565b61336461335f8261297d565b613341565b82525050565b600061337682856132f1565b91506133828284613353565b6014820191508190509392505050565b600061339e82846132f1565b915081905092915050565b7f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000600082015250565b60006133df601c83612853565b91506133ea826133a9565b602082019050919050565b6000602082019050818103600083015261340e816133d2565b9050919050565b60006134208261295d565b9050919050565b61343081613415565b82525050565b600060608201905061344b600083018661298f565b6134586020830185613427565b818103604083015261346a8184612c7c565b9050949350505050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006134d0602e83612853565b91506134db82613474565b604082019050919050565b600060208201905081810360008301526134ff816134c3565b9050919050565b6000613511826128fa565b915061351c836128fa565b925082820261352a816128fa565b9150828204841483151761354157613540613283565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613582826128fa565b915061358d836128fa565b92508261359d5761359c613548565b5b828204905092915050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006135de601883612853565b91506135e9826135a8565b602082019050919050565b6000602082019050818103600083015261360d816135d1565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000613670602983612853565b915061367b82613614565b604082019050919050565b6000602082019050818103600083015261369f81613663565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613702602683612853565b915061370d826136a6565b604082019050919050565b60006020820190508181036000830152613731816136f5565b9050919050565b61374181612b5a565b82525050565b61375081612b90565b82525050565b600060808201905061376b6000830187613738565b6137786020830186613747565b6137856040830185613738565b6137926060830184613738565b95945050505050565b7f496e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b60006137d1601183612853565b91506137dc8261379b565b602082019050919050565b60006020820190508181036000830152613800816137c4565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061383d602083612853565b915061384882613807565b602082019050919050565b6000602082019050818103600083015261386c81613830565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006138cf602e83612853565b91506138da82613873565b604082019050919050565b600060208201905081810360008301526138fe816138c2565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026139677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261392a565b613971868361392a565b95508019841693508086168417925050509392505050565b6000819050919050565b60006139ae6139a96139a4846128fa565b613989565b6128fa565b9050919050565b6000819050919050565b6139c883613993565b6139dc6139d4826139b5565b848454613937565b825550505050565b600090565b6139f16139e4565b6139fc8184846139bf565b505050565b5b81811015613a2057613a156000826139e9565b600181019050613a02565b5050565b601f821115613a6557613a3681613905565b613a3f8461391a565b81016020851015613a4e578190505b613a62613a5a8561391a565b830182613a01565b50505b505050565b600082821c905092915050565b6000613a8860001984600802613a6a565b1980831691505092915050565b6000613aa18383613a77565b9150826002028217905092915050565b613aba82612848565b67ffffffffffffffff811115613ad357613ad2612a2f565b5b613add825461309c565b613ae8828285613a24565b600060209050601f831160018114613b1b5760008415613b09578287015190505b613b138582613a95565b865550613b7b565b601f198416613b2986613905565b60005b82811015613b5157848901518255600182019150602085019450602081019050613b2c565b86831015613b6e5784890151613b6a601f891682613a77565b8355505b6001600288020188555050505b505050505050565b7f455243323938313a20726f79616c7479206665652077696c6c2065786365656460008201527f2073616c65507269636500000000000000000000000000000000000000000000602082015250565b6000613bdf602a83612853565b9150613bea82613b83565b604082019050919050565b60006020820190508181036000830152613c0e81613bd2565b9050919050565b7f455243323938313a20496e76616c696420706172616d65746572730000000000600082015250565b6000613c4b601b83612853565b9150613c5682613c15565b602082019050919050565b60006020820190508181036000830152613c7a81613c3e565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613cdd602583612853565b9150613ce882613c81565b604082019050919050565b60006020820190508181036000830152613d0c81613cd0565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613d6f602483612853565b9150613d7a82613d13565b604082019050919050565b60006020820190508181036000830152613d9e81613d62565b9050919050565b6000613db0826128fa565b9150613dbb836128fa565b9250828203905081811115613dd357613dd2613283565b5b92915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613e0f601983612853565b9150613e1a82613dd9565b602082019050919050565b60006020820190508181036000830152613e3e81613e02565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613ea1603283612853565b9150613eac82613e45565b604082019050919050565b60006020820190508181036000830152613ed081613e94565b9050919050565b600081905092915050565b6000613eed82612848565b613ef78185613ed7565b9350613f07818560208601612864565b80840191505092915050565b6000613f1f8285613ee2565b9150613f2b8284613ee2565b91508190509392505050565b6000608082019050613f4c6000830187613738565b613f596020830186612ebe565b613f66604083018561298f565b613f736060830184613738565b95945050505050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000613fb2600283613ed7565b9150613fbd82613f7c565b600282019050919050565b6000819050919050565b613fe3613fde82612b5a565b613fc8565b82525050565b6000613ff482613fa5565b91506140008285613fd2565b6020820191506140108284613fd2565b6020820191508190509392505050565b6000608082019050614035600083018761298f565b614042602083018661298f565b61404f6040830185612ebe565b81810360608301526140618184612c7c565b905095945050505050565b60008151905061407b816127b9565b92915050565b60006020828403121561409757614096612783565b5b60006140a58482850161406c565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006140e4602083612853565b91506140ef826140ae565b602082019050919050565b60006020820190508181036000830152614113816140d7565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614150601c83612853565b915061415b8261411a565b602082019050919050565b6000602082019050818103600083015261417f81614143565b9050919050565b6000614191826128fa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036141c3576141c2613283565b5b600182019050919050565b60006141d9826128fa565b91506141e4836128fa565b9250826141f4576141f3613548565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a26469706673582212209759d1d448d28861402d1eaf45a5b3faaf0c8e0f3978a573634b7ce3ac6271c764736f6c63430008110033454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429`;

export const ABI_721 = JSON.parse(
  `[{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]`
);

export const MAX_INTEGER = 2 ** 256 - 1;

export const ABI_20 = [
  {
    inputs: [{ internalType: "address", name: "_IceMaster", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "IceMaster",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_spender", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "bytes", name: "functionSignature", type: "bytes" },
      { internalType: "bytes32", name: "sigR", type: "bytes32" },
      { internalType: "bytes32", name: "sigS", type: "bytes32" },
      { internalType: "uint8", name: "sigV", type: "uint8" },
    ],
    name: "executeMetaTransaction",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getNonce",
    outputs: [{ internalType: "uint256", name: "nonce", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_account", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_recipient", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "address", name: "_recipient", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractDAO", type: "address" },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const ERC721CollectionV2 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "rarity",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maxSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentHash",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct ERC721BaseCollectionV2.Item",
        name: "_item",
        type: "tuple",
      },
    ],
    name: "AddItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_oldBaseURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_newBaseURI",
        type: "string",
      },
    ],
    name: "BaseURI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Complete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_previousCreator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newCreator",
        type: "address",
      },
    ],
    name: "CreatorshipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_issuedId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "Issue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_contentHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
    ],
    name: "RescueItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_previousValue",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_newValue",
        type: "bool",
      },
    ],
    name: "SetApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_previousValue",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_newValue",
        type: "bool",
      },
    ],
    name: "SetEditable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "SetGlobalManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "SetGlobalMinter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "SetItemManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "SetItemMinter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
    ],
    name: "UpdateItemData",
    type: "event",
  },
  {
    inputs: [],
    name: "COLLECTION_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ISSUED_ID_BITS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ITEM_ID_BITS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ISSUED_ID",
    outputs: [
      {
        internalType: "uint216",
        name: "",
        type: "uint216",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ITEM_ID",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "rarity",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
        ],
        internalType: "struct ERC721BaseCollectionV2.ItemParam[]",
        name: "_items",
        type: "tuple[]",
      },
    ],
    name: "addItems",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "batchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "completeCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createdAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "decodeTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "issuedId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_beneficiaries",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "_metadatas",
        type: "string[]",
      },
    ],
    name: "editItemsData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_issuedId",
        type: "uint256",
      },
    ],
    name: "encodeTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "globalManagers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "globalMinters",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_shouldComplete",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isApproved",
        type: "bool",
      },
      {
        internalType: "contract IRarities",
        name: "_rarities",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "rarity",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
        ],
        internalType: "struct ERC721BaseCollectionV2.ItemParam[]",
        name: "_items",
        type: "tuple[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isCompleted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isEditable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMintingAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_beneficiaries",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
    ],
    name: "issueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "itemManagers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "itemMinters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "string",
        name: "rarity",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "string",
        name: "contentHash",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "itemsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rarities",
    outputs: [
      {
        internalType: "contract IRarities",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "_contentHashes",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_metadatas",
        type: "string[]",
      },
    ],
    name: "rescueItems",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "setApproved",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "setEditable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_managers",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_values",
        type: "bool[]",
      },
    ],
    name: "setItemsManagers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_minters",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "setItemsMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_managers",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_values",
        type: "bool[]",
      },
    ],
    name: "setManagers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_minters",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_values",
        type: "bool[]",
      },
    ],
    name: "setMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCreator",
        type: "address",
      },
    ],
    name: "transferCreatorship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
