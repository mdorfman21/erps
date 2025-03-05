import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getAllSkus } from "../../controllers/sku/skuController.api";
import { getAllSkuColumns } from "../../functions/sku/getAllSkuColumns";
export const ViewSkus = () => {
  const [skus, setSkus] = React.useState([]);
  const columns = getAllSkuColumns();
  useEffect(() => {
    async function getSkus() {
      const response = await getAllSkus();
      setSkus(response.data);
    }
    getSkus();
  }, []);
  return <DataGrid columns={columns} rows={skus} />;
};
