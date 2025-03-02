import axios from "axios";

export const createSku = async ({ name, price, amount }) => {
  const response = await axios.post("/api/sku/create", {
    name,
    price,
    amount,
  });
  return response;
};
