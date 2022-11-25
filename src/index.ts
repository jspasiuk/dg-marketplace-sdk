import DGMarketplace from "./class/DGMarketplace.class";
import { CONTRACT_ADDRESS, CONTRACT_ABI, ICE_ADDRESS } from "./constants";

const DGMarketplaceInstance = new DGMarketplace();

//export default dgMarketplace;

export { DGMarketplaceInstance, CONTRACT_ADDRESS, CONTRACT_ABI, ICE_ADDRESS };
