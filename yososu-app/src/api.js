import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const yososuApi = {
  getInventoriesInStockOrder: () => api.get("inventories/stock/", {}),
  getInventoriesInPriceOrder: () => api.get("/inventories/price/", {}),
};
