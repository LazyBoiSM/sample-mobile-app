import "./SideBar.css";
import "../Components.css";
import Menu from "../menu/Menu";
import "../Components.css";
import Button from "../button/Button";

function SideBar() {
  return (
    <div className="sideBarContainer boxSizing">
      <div>
        <img
          className="logo"
          src="https://png.pngtree.com/template/20190214/ourmid/pngtree-banking-logo-image_55107.jpg"
          alt="photoError"
        />
      </div>
      <Menu />
      <div>
        <Button name="Login" />
      </div>
    </div>
  );
}

export default SideBar;
