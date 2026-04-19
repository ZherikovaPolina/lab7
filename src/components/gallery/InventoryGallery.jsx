import InventoryCard from "./InventoryCard";
import useFavorites from "../../hooks/useFavorites";

export default function InventoryGallery({ items, onClick }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = (id) => {
    return favorites.some((f) => f.id === id);
  };

  return (
    <div className="grid">
      {items.map((item) => (
        <InventoryCard
          key={item.id}
          item={item}
          onClick={onClick}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      ))}
    </div>
  );
}