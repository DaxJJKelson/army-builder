function RosterList({ roster, toggleSelection, selectedUnits }) {
  if (roster.length === 0) {
    return <p>No units in roster yet.</p>;
  }

  const isSelected = (instanceId) =>
    selectedUnits.some((u) => u.rosterInstanceId === instanceId);

  return (
    <div>
      {roster.map((unit) => (
        <div
          key={unit.rosterInstanceId}
          className="unit-card"
          style={{
            backgroundColor: isSelected(unit.rosterInstanceId)
              ? "#ffe08a"
              : "white",
            cursor: "pointer",
          }}
          onClick={() => toggleSelection(unit)}
        >
          <h4>{unit.name}</h4>
          <p>{unit.points} pts</p>
        </div>
      ))}
    </div>
  );
}

export default RosterList;
