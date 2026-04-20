import { useEffect, useState } from "react";
import { getInventory } from "../services/inventoryApi";
import InventoryGallery from "../components/gallery/InventoryGallery";
import InventoryQuickView from "../components/gallery/InventoryQuickView";
import FavoritesBar from "../components/gallery/FavoritesBar";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInventory();
        setItems(data);
      } catch {
        setError("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  if (items.length === 0) return <p>Немає даних</p>;

  return (
    <div className="container">
      <FavoritesBar />

      <InventoryGallery items={items} onClick={setSelected} />

      <InventoryQuickView item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}