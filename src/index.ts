class DGMarketplace {
  backend_url: string = "";
  constructor() {}

  init(backend_url: string) {
    this.backend_url = backend_url;
  }

  validateConnection() {
    if (this.backend_url === "") {
      throw new Error("Backend URL is not set");
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

  async getGroups(collectionAddress: string) {
    this.validateConnection();
    try {
      //TODO: ADD ORDER AND SOME FILTERS
      const response = await this.get(
        `/marketplace?nftAddress=${collectionAddress}`
      );
      const data = await response.json();

      const Groups = [];
      for (const group of data.data) {
        const image = this.fixIpfsImage(group.imageUrl);

        Groups.push({
          address: group.nftAddress,
          name: group.name,
          image,
          cheaperTokenId: group.tokenId,
          cheaperPrice: group.price,
          isVerifiedCreator: group.isVerifiedCreator,
          contractType: group.contractType,
          symbol: group.symbol,
          description: group.description,
          sellerAddress: group.sellerAddress,
        });
      }

      return Groups;
    } catch (error) {
      throw error;
    }
  }

  async getTokens(collectionAddress: string, groupId: number) {}

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

const marketplace = new DGMarketplace();

export default marketplace;
