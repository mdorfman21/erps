import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { CreateSku } from "./create";
import Button from "@mui/material/Button";

export const SkuModule = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button path onClick={() => navigate("create")}>
        Create
      </Button>
      {/* <>
        <Outlet />
      </> */}
    </>
  );
};
