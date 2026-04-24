import useLocalStorage from "../hooks/useLocalStorage";

import UnitForm from "../components/units/UnitForm";
import UnitList from "../components/units/UnitList";

function CreateUnits() {
  const [units, setUnits] = useLocalStorage("units", []);

  const addUnit = (unit) => {
    setUnits((prevUnits) => [...prevUnits, unit]);
  };

  const deleteUnit = (id) => {
    setUnits((prevUnits) => prevUnits.filter((unit) => unit.id !== id));
  };

  return (
    <div>
      <h1>Create Unit Templates</h1>

      <UnitForm onAddUnit={addUnit} />

      <UnitList units={units} onDelete={deleteUnit} />
    </div>
  );
}

export default CreateUnits;
