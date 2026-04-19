import { useEffect, useState } from "react";
import { getInventory } from "../services/inventoryApi";
import InventoryGallery from "../components/gallery/InventoryGallery";
import InventoryQuickView from "../components/gallery/InventoryQuickView";
import FavoritesBar from "../components/gallery/FavoritesBar";
import useFavorites from "../hooks/useFavorites";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    getInventory().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <FavoritesBar />

      <h1>Галерея</h1>

      <InventoryGallery
        items={items}
        onClick={setSelected}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />

      <InventoryQuickView
        item={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}