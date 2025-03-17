import React from "react";
import { useNavigate } from "react-router-dom";
import { ViewSkus } from "./view";

import Button from "@mui/material/Button";

export const SkuModule = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        path
        variant="contained"
        color="primary"
        onClick={() => navigate("create")}
      >
        Create SKU
      </Button>
      <ViewSkus navigate={navigate} />
    </>
  );
};
