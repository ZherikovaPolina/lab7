export default function InventoryCard({
  item,
  onClick,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <div className="card" onClick={() => onClick(item)}>
      <img src={item.photo} alt={item.inventory_name} />

      <h3>{item.inventory_name}</h3>

      <button
        className="fav-btn"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(item);
        }}
      >
        {isFavorite(item.id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}