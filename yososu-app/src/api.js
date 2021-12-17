import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const api = axios.create({
  baseURL: "https://3.34.236.99:8080/",
});
// httpsAgent: agent
export const yososuApi = {
  getInventoriesInStockOrder: (addr) =>
    api.get(`inventories/stock/?addr=${addr}`, {}),
  getInventoriesInPriceOrder: (addr) =>
    api.get(`/inventories/price/?addr=${addr}`, {}),
};
