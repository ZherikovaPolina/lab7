import { createContext, useContext, useState } from "react";

const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <InventoryContext.Provider value={{ items, setItems }}>
      {children}
    </InventoryContext.Provider>
  );
};