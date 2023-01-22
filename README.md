# DG Marketplace SDK

This SDK allows you to implement Decentral Games ICE Marketplace into your web app.

## Installation

Install my-project with npm

```bash
  npm install dg-marketplace-sdk
```

## Features

- Full typescript
- Metamask Support

## Usage/Examples

### Init SDK

```javascript
import DGMarketplace from "dg-marketplace-sdk";

DGMarketplace.init(BASE_DG_URL, META_SERVER, RPC_PROVIDER);
```

| Parameter      | Type     | Description                                                             |
| :------------- | :------- | :---------------------------------------------------------------------- |
| `BASE_DG_URL`  | `string` | **Required**. DG Backend API URL for Marketplace                        |
| `META_SERVER`  | `string` | **Required**. DG Metaserver API for Marketplace                         |
| `RPC_PROVIDER` | `string` | **Required**. RPC Provider of your choice. Example Alchemy Polygon RPC. |

### List all collections available for sale

```javascript
const collections = await DGMarketplace.getCollections(false);
```

### Init Provider

```javascript
import DGMarketplace from "dg-marketplace-sdk";

DGMarketplace.initProvider(walletProvider, walletType);
```

| Parameter        | Type     | Description                                                         |
| :--------------- | :------- | :------------------------------------------------------------------ |
| `walletProvider` | `string` | **Required**. Object provider. window.metamask or web3auth provider |
| `walletType`     | `string` | **Required**. Enum = Metamask or Web3Auth                           |

### Get Ice Allowance

```javascript
import DGMarketplace from "dg-marketplace-sdk";

DGMarketplace.getIceAllowance(walletAddress);
```

| Parameter       | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `walletAddress` | `string` | **Required**. User wallet address |

### List all collections available for sale

```javascript
const collections = await DGMarketplace.getCollections(false);
```

### List all collections available for sale

```javascript
const collections = await DGMarketplace.getCollections(
  sellerAddress,
  collectionName,
  limit,
  offset
);
```

| Parameter        | Type     | Description                                                  |
| :--------------- | :------- | :----------------------------------------------------------- |
| `sellerAddress`  | `string` | **Optional**. (Filter) Filter one particular seller address. |
| `collectionName` | `enum`   | **Optional**. (Filter) Filter partial name of the collection |
| `limit`          | `number` | **Optional**. (Pagination) Number of items to retrieve       |
| `offset`         | `number` | **Optional**. (Pagination) Number of items to skip           |

### List groups from one collections

```javascript
const groups = await DGMarketplace.getGroups(
  collectionAddress,
  orderDirection,
  limit,
  offset,
  searchCriteria,
  sellerAddress
);
```

| Parameter           | Type     | Description                                                      |
| :------------------ | :------- | :--------------------------------------------------------------- |
| `collectionAddress` | `string` | **Optional**. (Filter) Collection address                        |
| `orderDirection`    | `enum`   | **Optional**. ASC or DESC                                        |
| `limit`             | `number` | **Optional**. (Pagination) Number of items to retrieve           |
| `offset`            | `number` | **Optional**. (Pagination) Number of items to skip               |
| `searchCriteria`    | `string` | **Optional**. (Filter) Filter by collection name using wildcards |
| `sellerAddress`     | `string` | **Optional**. (Filter) Filter by a particular seller address     |

### List tokens ID from one group

```javascript
const tokens = await DGMarketplace.getTokens(
  address,
  resourceId,
  sellerAddress
);
```

| Parameter       | Type     | Description                                                  |
| :-------------- | :------- | :----------------------------------------------------------- |
| `address`       | `string` | **Required**. Token address                                  |
| `resourceId`    | `string` | **Required**. ID from the resource (group)                   |
| `sellerAddress` | `string` | **Optional**. (Filter) Filter by a particular seller address |

### Generate Payment Link

```javascript
const paymentLink = await DGMarketplace.getPaymentLink(
  type,
  userAddress,
  tokenAddress,
  tokenId,
  tokenResourceId
);
```

| Parameter         | Type     | Description                                |
| :---------------- | :------- | :----------------------------------------- |
| `type`            | `enum`   | **Required**. binance or coinbase or paper |
| `userAddress`     | `string` | **Required**. Your wallet address          |
| `tokenAddress`    | `string` | **Required**. NFT Token address            |
| `tokenId`         | `string` | **Required**. NFT Token unique ID          |
| `tokenResourceId` | `string` | **Required**. NFT resource ID (group)      |

### Buy Item

```javascript
const status = await DGMarketplace.buyItem(userAddress, tokenAddress, tokenId);
```

| Parameter      | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `userAddress`  | `string` | **Required**. Your wallet address |
| `tokenAddress` | `string` | **Required**. NFT Token address   |
| `tokenId`      | `string` | **Required**. NFT Token unique ID |

### Get transaction status

```javascript
const status = await DGMarketplace.getTransactionStatus(transactionHash);
```

| Parameter         | Type     | Description                                                     |
| :---------------- | :------- | :-------------------------------------------------------------- |
| `transactionHash` | `string` | **Required**. Polygon transaction hash (Returned from buy item) |

### Get Token Metadata

```javascript
const status = await DGMarketplace.getTokenMetadata(collectionAddress, tokenId);
```

| Parameter           | Type     | Description                                   |
| :------------------ | :------- | :-------------------------------------------- |
| `collectionAddress` | `string` | **Required**. Collection address to be query. |
| `tokenId`           | `string` | **Required**. Token ID of the collection.     |

### Approve ICE spender contract

```javascript
const status = await DGMarketplace.approveContractIce(userWallet);
```

| Parameter    | Type     | Description                                     |
| :----------- | :------- | :---------------------------------------------- |
| `userWallet` | `string` | **Required**. User wallet address for approval. |

## Roadmap

- Improve MetaTx functions to reuse code

- Handle isActive inside the SDK

- Handle user wallet inside the SDK

## Authors

- [@jspasiuk](https://www.github.com/jspasiuk)
