import UnitCard from "./UnitCard";

function UnitList({ units, onDelete }) {
  if (units.length === 0) {
    return <p>No units created yet.</p>;
  }

  return (
    <div>
      {units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default UnitList;
