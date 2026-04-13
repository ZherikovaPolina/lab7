import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InventoryForm from "../components/inventory/InventoryForm";
import {
  getInventoryById,
  updateInventory
} from "../services/inventoryApi";

export default function AdminInventoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getInventoryById(id).then(setItem);
  }, [id]);

  const handleSubmit = async (data) => {
  await updateInventory(id, data);
  navigate("/");
};

  if (!item) return <p>Loading...</p>;

  return <InventoryForm initialData={item} onSubmit={handleSubmit} />;
}