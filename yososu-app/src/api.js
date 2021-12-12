import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const yososuApi = {
  getInventoriesInStockOrder: (addr) =>
    api.get(`inventories/stock/?addr=${addr}`, {}),
  getInventoriesInPriceOrder: () => api.get("/inventories/price/", {}),
};
