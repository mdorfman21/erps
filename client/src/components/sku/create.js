import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { createSku } from "../../controllers/sku/skuController.api";

export const CreateSku = () => {
  console.log("creating sku");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  console.log(name);
  return (
    <Container>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <TextField
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
      />
      <Button onClick={() => createSku({ name, price })}>Create</Button>
    </Container>
  );
};
