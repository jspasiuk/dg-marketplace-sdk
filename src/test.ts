import marketplace from "./index";

const backend_url = "http://localhost:3000";

marketplace.init(backend_url);

marketplace.getCollections(false).then((collections) => {
  console.log(collections);
});
