import axios from "axios";

export const createSku = async ({ name, price }) => {
  const response = await axios.post("/api/sku/create", {
    name,
    price,
  });
  return response;
};
