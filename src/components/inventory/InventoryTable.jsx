import { Link } from "react-router-dom";

export default function InventoryTable({ items, onDelete }) {
  if (!items.length) return <p>Немає інвентарю</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Назва</th>
          <th>Опис</th>
          <th>Фото</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.inventory_name}</td>
            <td>{item.description}</td>
            <td>
              {item.photo && <img src={item.photo} width="50" />}
            </td>
            <td>
              <Link to={`/admin/${item.id}`}>👁</Link>
              <Link to={`/admin/edit/${item.id}`}>✏️</Link>
              <button onClick={() => onDelete(item.id)}>🗑</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}