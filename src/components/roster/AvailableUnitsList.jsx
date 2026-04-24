function AvailableUnitsList({
  units,
  addToRoster,
  remainingPoints,
  selectedTotal,
}) {
  return (
    <div>
      {units.map((unit) => {
        const tooExpensive = unit.points > remainingPoints;

        const substitutionCandidate =
          selectedTotal > 0 && unit.points <= selectedTotal;

        return (
          <div
            key={unit.id}
            className="unit-card"
            style={{
              opacity: tooExpensive ? 0.4 : 1,
              border: substitutionCandidate
                ? "2px solid orange"
                : "1px solid #ccc",
            }}
          >
            <h4>{unit.name}</h4>
            <p>{unit.points} pts</p>

            <button disabled={tooExpensive} onClick={() => addToRoster(unit)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AvailableUnitsList;
