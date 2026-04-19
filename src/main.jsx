import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { InventoryProvider } from "./store/InventoryContext";
import { FavoritesProvider } from "./store/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <InventoryProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </InventoryProvider>
);