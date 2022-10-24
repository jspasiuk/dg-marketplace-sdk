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

### List all collections available for sale

```javascript
const collections = await DGMarketplace.getCollections(false);
```

### List groups from one collections

```javascript
const groups = await DGMarketplace.getGroups(
  collectionAddress,
  orderDirection,
  limit,
  offset,
  searchCriteria
);
```

| Parameter           | Type     | Description                                                      |
| :------------------ | :------- | :--------------------------------------------------------------- |
| `collectionAddress` | `string` | **Optional**. (Filter) Collection address                        |
| `orderDirection`    | `enum`   | **Optional**. ASC or DESC                                        |
| `limit`             | `number` | **Optional**. (Pagination) Number of items to retrieve           |
| `offset`            | `number` | **Optional**. (Pagination) Number of items to skip               |
| `searchCriteria`    | `string` | **Optional**. (Filter) Filter by collection name using wildcards |

### List tokens ID from one group

```javascript
const tokens = await DGMarketplace.getTokens(address, resourceId);
```

| Parameter    | Type     | Description                                |
| :----------- | :------- | :----------------------------------------- |
| `address`    | `string` | **Required**. Token address                |
| `resourceId` | `string` | **Required**. ID from the resource (group) |

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

### Buy item with metamask

```javascript
const status = await DGMarketplace.buyItem(
  window.ethereum,
  userAddress,
  tokenAddress,
  tokenId
);
```

| Parameter         | Type     | Description                                     |
| :---------------- | :------- | :---------------------------------------------- |
| `window.ethereum` | `enum`   | **Required**. Instance of your webpage metamask |
| `userAddress`     | `string` | **Required**. Your wallet address               |
| `tokenAddress`    | `string` | **Required**. NFT Token address                 |
| `tokenId`         | `string` | **Required**. NFT Token unique ID               |

## Roadmap

- Improve MetaTx functions to reuse code

- Add metamask provider inside the sdk

- Handle isActive inside the sdk

- Handle user wallet inside the sdk

## Authors

- [@jspasiuk](https://www.github.com/jspasiuk)
