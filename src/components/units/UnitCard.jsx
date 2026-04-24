function UnitCard({ unit, onDelete }) {
  return (
    <div className="unit-card">
      <h3>{unit.name}</h3>
      <p>{unit.points} pts</p>

      <button onClick={() => onDelete(unit.id)}>Delete</button>
    </div>
  );
}

export default UnitCard;
