import React from "react";
import Button from "@mui/material/Button";

export const getAllSkuColumns = (editOnClick) => [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "amount",
    valueGetter: (value, row) => row.Inventories[0].amount,
    headerName: "Current Inventory",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      console.log(params);

      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => editOnClick(params.row.id)}
        >
          Edit
        </Button>
      );
    },
  },
];
