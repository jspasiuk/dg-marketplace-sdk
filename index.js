const axios = require("axios");

class Marketplace {
  backend_url = "";
  constructor() {}

  init(backend_url) {
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

  async getGroups(collectionId) {}

  async getTokens(collectionId, groupId) {}
}

module.exports = new Marketplace();
