import InventoryForm from "../components/inventory/InventoryForm";
import { createInventory } from "../services/inventoryApi";
import { useNavigate } from "react-router-dom";

export default function AdminInventoryCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
  await createInventory(data);
  navigate("/");
};

  return (
    <div>
      <h1>Створення</h1>
      <InventoryForm onSubmit={handleSubmit} />
    </div>
  );
}