import App from "./App";
import { SkuModule } from "./components/sku";
import { CreateSku } from "./components/sku/create";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "sku",
        element: <SkuModule />,
        children: [],
      },
      {
        path: "sku/create",
        element: <CreateSku />,
      },
    ],
  },
];
