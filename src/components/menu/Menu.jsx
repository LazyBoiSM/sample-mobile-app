import { NavLink } from "react-router-dom";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWrench,
  faBagShopping,
  faAddressBook,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "../Components.css";
import { useContext } from "react";
import { Context } from "../context/Context";

const menuItems = [
  { title: "home", url: "/", icon: { name: faHouse } },
  { title: "products", url: "/products", icon: { name: faBagShopping } },
  { title: "services", url: "/services", icon: { name: faWrench } },
  { title: "contactUs", url: "/contact-us", icon: { name: faAddressBook } },
  { title: "aboutUs", url: "about-us", icon: { name: faCircleInfo } },
];

function Menu() {
  const { pointer } = useContext(Context);
  const opacity1 = {
    opacity: "1",
  };

  const opacity0 = {
    opacity: "0",
  };

  const menuHighlight = {
    backgroundColor: "lightgray",
    transform: "scale(1.03)",
    borderRadius: "5px",
  };

  const menuLowlight = {};
  return (
    <div className="menuItemsContainer">
      {menuItems.map((item, index) => {
        return (
          <div
            className="menuItems"
            style={pointer == item.title ? menuHighlight : menuLowlight}
            key={index}
          >
            <div
              className="pointer"
              style={pointer == item.title ? opacity1 : opacity0}
            ></div>
            <NavLink className="title f14" to={item.url}>
              <FontAwesomeIcon className="icon" icon={item.icon.name} />
              {item.title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
