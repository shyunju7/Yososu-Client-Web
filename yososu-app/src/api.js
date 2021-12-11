import axios from "axios";

const api = axios.create({
  baseURL: "http://3.34.236.99:8080",
});

export const yososuApi = {
  getInventoriesInStockOrder: () => api.get("/inventories/stock/", {}),
};
