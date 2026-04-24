import { useState } from "react";

function UnitForm({ onAddUnit }) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !points) return;

    const newUnit = {
      id: crypto.randomUUID(),
      name,
      points: Number(points),
      keywords: [],
      statline: {},
    };

    onAddUnit(newUnit);

    setName("");
    setPoints("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Unit</h2>

      <input
        type="text"
        placeholder="Unit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />

      <button type="submit">Add Unit</button>
    </form>
  );
}

export default UnitForm;
