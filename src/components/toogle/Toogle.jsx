import "./Toogle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../Components.css";
import { useContext } from "react";
import { Context } from "../context/Context";

function Toogle() {
  const { darkMode, setDarkMode } = useContext(Context);
  const dark = {
    transform: "translateX(35px)",
  };

  const light = {
    transform: "translateX(0px)",
  };

  return (
    <div className="boxSizing colorWhite toogle">
      <div className="slider" style={darkMode ? dark : light}></div>
      <div>
        <FontAwesomeIcon
          icon={faSun}
          style={darkMode ? { color: "#000080" } : { color: "#ffbf00" }}
          onClick={() => setDarkMode(false)}
          className="cursor"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faMoon}
          style={darkMode ? { color: "#ffbf00" } : { color: "#000080" }}
          onClick={() => setDarkMode(true)}
          className="cursor"
        />
      </div>
    </div>
  );
}

export default Toogle;
