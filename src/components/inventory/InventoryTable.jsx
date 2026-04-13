import { Link } from "react-router-dom";

export default function InventoryTable({ items, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Опис</th>
          <th>Фото</th>
          <th>Дії</th>
        </tr>
      </thead>

      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan="4">Немає інвентарю</td>
          </tr>
        ) : (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.photo} width="60" />
              </td>

              <td>
                <Link to={`/admin/${item.id}`}>
                  <button>👁</button>
                </Link>

                <Link to={`/admin/edit/${item.id}`}>
                  <button>✏️</button>
                </Link>

                <button onClick={() => onDelete(item.id)}>🗑</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}