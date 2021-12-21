import axios from "axios";

const api = axios.create({
  baseURL: "//3.34.236.99:8080/",
});

export const yososuApi = {
  getInventoriesInStockOrder: (addr) =>
    api.get(`inventories/stock/?addr=${addr}`, {}),
  getInventoriesInPriceOrder: (addr) =>
    api.get(`/inventories/price/?addr=${addr}`, {}),
};
