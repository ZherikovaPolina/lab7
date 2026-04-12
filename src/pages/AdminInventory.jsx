import { useEffect, useState } from "react";
import { getInventory, deleteInventory } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import ConfirmModal from "../components/inventory/ConfirmModal";
import { useInventory } from "../store/InventoryContext";
import { Link } from "react-router-dom";

export default function AdminInventory() {
  const { items, setItems } = useInventory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getInventory();
      setItems(data);
    } catch {
      setError("Помилка");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    await deleteInventory(deleteId);
    setDeleteId(null);
    fetchData();
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Інвентар</h1>
      <Link to="/create">+ Додати</Link>

      <InventoryTable items={items} onDelete={setDeleteId} />

      {deleteId && (
        <ConfirmModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}