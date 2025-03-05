import axios from "axios";

export const createSku = async ({ name, price, amount }) => {
  const response = await axios.post("/api/sku/create", {
    name,
    price,
    amount,
  });
  return response;
};

export const getAllSkus = async () => {
  const response = await axios.get("/api/sku");
  return response;
};
