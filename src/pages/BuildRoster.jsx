import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";

import AvailableUnitsList from "../components/roster/AvailableUnitsList";
import RosterList from "../components/roster/RosterList";
import PointsTracker from "../components/roster/PointsTracker";

function BuildRoster() {
  const [units] = useLocalStorage("units", []);

  const [roster, setRoster] = useLocalStorage("roster", []);

  const [maxPoints, setMaxPoints] = useLocalStorage("maxPoints", 2000);

  const totalPoints = roster.reduce((sum, unit) => sum + unit.points, 0);

  const remainingPoints = maxPoints - totalPoints;

  const [selectedUnits, setSelectedUnits] = useState([]);

  const toggleSelection = (unit) => {
    setSelectedUnits((prev) => {
      const alreadySelected = prev.find((u) => u.id === unit.id);

      if (alreadySelected) {
        return prev.filter((u) => u.id !== unit.id);
      }

      return [...prev, unit];
    });
  };

  const selectedTotal = selectedUnits.reduce(
    (sum, unit) => sum + unit.points,
    0,
  );

  const addToRoster = (unit) => {
    setRoster((prev) => [...prev, unit]);
  };

  const removeFromRoster = (id) => {
    setRoster((prev) => prev.filter((unit) => unit.id !== id));
  };

  return (
    <div className="roster-layout">
      {/* LEFT COLUMN */}
      <div className="available-units">
        <h2>Available Units</h2>

        <label>
          Max Points:
          <input
            type="number"
            value={maxPoints}
            onChange={(e) => setMaxPoints(Number(e.target.value))}
          />
        </label>

        <AvailableUnitsList
          units={units}
          addToRoster={addToRoster}
          remainingPoints={remainingPoints}
          selectedTotal={selectedTotal}
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="roster-column">
        <PointsTracker totalPoints={totalPoints} maxPoints={maxPoints} />

        <RosterList
          roster={roster}
          removeFromRoster={removeFromRoster}
          toggleSelection={toggleSelection}
          selectedUnits={selectedUnits}
        />
      </div>
    </div>
  );
}

export default BuildRoster;
