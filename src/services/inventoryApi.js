const BASE_URL = "http://localhost:3000";

export const getInventory = async () => {
  const res = await fetch(`${BASE_URL}/inventory`);
  if (!res.ok) throw new Error("Error fetching");
  return res.json();
};

export const getInventoryById = async (id) => {
  const res = await fetch(`${BASE_URL}/inventory/${id}`);
  return res.json();
};

export const createInventory = async (data) => {
  const res = await fetch("http://localhost:3000/inventory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const updateInventory = async (id, data) => {
  const res = await fetch(`http://localhost:3000/inventory/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const updateInventoryPhoto = async (id, formData) => {
  await fetch(`${BASE_URL}/inventory/${id}/photo`, {
    method: "PUT",
    body: formData,
  });
};

export const deleteInventory = async (id) => {
  await fetch(`${BASE_URL}/inventory/${id}`, {
    method: "DELETE",
  });
};