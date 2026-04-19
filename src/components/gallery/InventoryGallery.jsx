import InventoryCard from "./InventoryCard";

export default function InventoryGallery({ items, onClick, toggleFavorite, isFavorite }) {
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