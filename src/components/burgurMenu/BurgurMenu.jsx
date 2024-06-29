import { useState } from "react";
import "./BurgurMenu.css";

function BurgurMenu() {
  const [clicked, setClick] = useState(false);

  const transform1 = {
    transform: "translate(3px,8px) rotate(45deg)",
  };

  const transform2 = {
    transform: "rotate(-45deg)",
  };

  const transform3 = {
    transform: "translate(18px,-6px)rotate(-135deg)",
  };
  return (
    <div className="lineParent" onClick={() => setClick(!clicked)}>
      <div
        className="line line1"
        style={clicked ? transform1 : console.log("")}
      ></div>
      <div
        className="line line2"
        style={clicked ? transform2 : console.log("")}
      ></div>
      <div
        className="line line3"
        style={clicked ? transform3 : console.log("")}
      >
        <div class="line3Child"></div>
      </div>
    </div>
  );
}

export default BurgurMenu;
