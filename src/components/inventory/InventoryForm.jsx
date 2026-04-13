import { useState } from "react";

export default function InventoryForm({ onSubmit, initialData = {} }) {
  const [inventory_name, setName] = useState(initialData.inventory_name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [photo, setPhoto] = useState(initialData.photo || "");
  const [preview, setPreview] = useState(initialData.photo || "");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inventory_name.trim()) {
      alert("Введи назву");
      return;
    }

    onSubmit({
      inventory_name,
      description,
      photo,
    });

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Назва"
        value={inventory_name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="file" onChange={handleFileChange} />

      {preview && <img src={preview} width="150" />}

      <button type="submit">Зберегти</button>
    </form>
  );
}