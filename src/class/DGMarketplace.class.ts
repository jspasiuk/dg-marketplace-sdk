class DGMarketplace {
  backend_url: string = "";
  gasServer_url: string = "";
  iceValue: string = "";

  constructor() {}

  async init(backend_url: string) {
    this.backend_url = backend_url;

    await this.getIceValue();
  }

  validateConnection() {
    if (this.backend_url === "") {
      throw new Error("Backend URL is not set");
    }
  }

  async getIceValue() {
    try {
      const response = await this.get(`/stripe/ice-price`);
      const data = await response.json();

      this.iceValue = data?.data?.quote?.USD?.price || 0;
    } catch (error) {
      throw error;
    }
  }

  async getCollections(verifiedCreator: boolean) {
    this.validateConnection();
    try {
      const response = await this.get(`/marketplace/collections`);
      const data = await response.json();

      const Collections = [];
      for (const collection of data.data) {
        const CollectionImages = [];
        if (collection.images) {
          for (const image of collection.images) {
            CollectionImages.push(this.fixIpfsImage(image));
          }
        }
        Collections.push({
          address: collection.nftAddress,
          name: collection.name,
          images: CollectionImages,
        });
      }

      return Collections;
    } catch (error) {
      throw error;
    }
  }

  async getGroups(
    collectionAddress: string,
    order?: string,
    limit?: number,
    offset?: number,
    name?: string
  ) {
    this.validateConnection();
    try {
      let url = `/marketplace?nftAddress=${collectionAddress}`;
      url += order ? `&price=${order}` : "";
      url += limit ? `&limit=${limit}` : "";
      url += offset ? `&offset=${offset}` : "";
      url += name ? `&name=${name}` : "";

      const response = await this.get(url);
      const data = await response.json();

      const Groups = [];
      for (const group of data.data.marketListingGrouped) {
        const image = this.fixIpfsImage(group.imageUrl);

        Groups.push({
          address: group.nftAddress,
          name: group.name,
          image,
          tokenId: group.tokenId,
          price: group.price.toString(),
          priceUsd: (group.price * +this.iceValue).toFixed(2),
          isVerifiedCreator: group.isVerifiedCreator,
          contractType: group.contractType,
          symbol: group.symbol,
          description: group.description,
          sellerAddress: group.sellerAddress,
          resourceId: group.resourceId,
        });
      }

      return Groups;
    } catch (error) {
      throw error;
    }
  }

  async getTokens(collectionAddress: string, groupId: string) {
    this.validateConnection();
    try {
      const url = `/marketplace/listings/${collectionAddress}/${groupId}`;

      const response = await this.get(url);
      const data = await response.json();

      const Tokens = [];
      for (const token of data.data) {
        const image = this.fixIpfsImage(token.imageUrl);

        Tokens.push({
          address: token.nftAddress,
          name: token.name,
          image,
          tokenId: token.tokenId,
          price: token.price.toString(),
          symbol: token.symbol,
          description: token.description,
          sellerAddress: token.sellerAddress,
          resourceId: token.resourceId,
        });
      }

      return Tokens;
    } catch (error) {
      throw error;
    }
  }

  fixIpfsImage = (image: string) => {
    if (!image) return "";
    if (image.substr(0, 4) === "ipfs") {
      image = image.replace("ipfs://", "");
      image = image.replace("ipfs/", "");
      image = image = "https://ipfs.io/ipfs/" + image;
    }
    return image;
  };

  async get(url: string) {
    return fetch(`${this.backend_url}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default DGMarketplace;
