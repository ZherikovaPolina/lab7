import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InventoryForm from "../components/inventory/InventoryForm";
import {
  getInventoryById,
  updateInventory,
  updateInventoryPhoto,
} from "../services/inventoryApi";

export default function AdminInventoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getInventoryById(id).then(setItem);
  }, []);

  const handleSubmit = async (formData, jsonData) => {
    await updateInventory(id, jsonData);

    if (formData.get("photo")) {
      const fd = new FormData();
      fd.append("photo", formData.get("photo"));
      await updateInventoryPhoto(id, fd);
    }

    navigate("/");
  };

  if (!item) return <p>Loading</p>;

  return <InventoryForm initialData={item} onSubmit={handleSubmit} />;
}