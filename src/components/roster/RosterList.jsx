function RosterList({
  roster,
  removeFromRoster,
  toggleSelection,
  selectedUnits,
}) {
  if (roster.length === 0) {
    return <p>No units in roster yet.</p>;
  }

  const isSelected = (id) => selectedUnits.some((u) => u.id === id);

  return (
    <div>
      {roster.map((unit) => (
        <div
          key={unit.id}
          className="unit-card"
          style={{
            backgroundColor: isSelected(unit.id) ? "#ffe08a" : "white",
            cursor: "pointer",
          }}
          onClick={() => toggleSelection(unit)}
        >
          <h4>{unit.name}</h4>
          <p>{unit.points} pts</p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              removeFromRoster(unit.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default RosterList;
