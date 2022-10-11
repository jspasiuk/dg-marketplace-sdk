import axios from "axios";

class Marketplace {
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

  async getCollections() {
    this.validateConnection();
    try {
      const response = await axios.get(
        `${this.backend_url}/marketplace/collections`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getGroups(collectionId: number) {}

  async getTokens(collectionId: number, groupId: number) {}
}

const marketplace = new Marketplace();

export default marketplace;
