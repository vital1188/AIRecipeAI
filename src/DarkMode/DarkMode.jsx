import SunIcon from "./Sun.jsx";
import MoonIcon from "./Moon.jsx";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarckMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const setMode = (e) => {
    if (e.target.checked) {
      setDarckMode();
    } else {
      setLightMode();
    }
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onClick={(e) => setMode(e)}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;
