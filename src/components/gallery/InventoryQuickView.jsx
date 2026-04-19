export default function InventoryQuickView({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{item.inventory_name}</h2>

        <img src={item.photo} alt={item.inventory_name} />

        <p>{item.description}</p>

        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
}