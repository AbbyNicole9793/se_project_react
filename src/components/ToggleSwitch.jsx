import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import { useContext } from "react";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange} = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={currentTemperatureUnit === 'C'}
        onChange={handleToggleSwitchChange}
        className="toggle-switch__checkbox"
      />

      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text_F">F</span>
      <span className="toggle-switch__text toggle-switch__text_C">C</span>
    </label>
  );
}

export default ToggleSwitch;
