export default function InventoryDetails({ item }) {
  if (!item) return <p>Loading</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{item.inventory_name}</h2>

      <p>
        <strong>Опис:</strong> {item.description || "Немає опису"}
      </p>

      {item.photo && (
        <div>
          <img
            src={item.photo}
            alt={item.inventory_name}
            width="300"
            style={{ marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
}