import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInventoryById } from "../services/inventoryApi";
import InventoryDetails from "../components/inventory/InventoryDetails";

export default function AdminInventoryDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getInventoryById(id);
        setItem(data);
      } catch (e) {
        setError("Помилка завантаження даних");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Деталі інвентарю</h1>

      <InventoryDetails item={item} />
    </div>
  );
}