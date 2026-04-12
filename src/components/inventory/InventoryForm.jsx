import { useState } from "react";

export default function InventoryForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.inventory_name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Назва обов'язкова");
      return;
    }

    const formData = new FormData();
    formData.append("inventory_name", name);
    formData.append("description", description);
    if (photo) formData.append("photo", photo);

    onSubmit(formData, { inventory_name: name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Назва"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />

      {error && <p>{error}</p>}

      <button type="submit">Зберегти</button>
    </form>
  );
}