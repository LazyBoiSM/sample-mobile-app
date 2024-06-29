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

const menuItems = [
  { title: "Home", url: "/", icon: { name: faHouse } },
  { title: "Products", url: "/products", icon: { name: faBagShopping } },
  { title: "Services", url: "/services", icon: { name: faWrench } },
  { title: "ContactUs", url: "/contact-us", icon: { name: faAddressBook } },
  { title: "AboutUs", url: "about-us", icon: { name: faCircleInfo } },
];

function Menu() {
  return (
    <ul>
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <div className="pointer"></div>
            <NavLink className="title f14" to={item.url}>
              <FontAwesomeIcon className="icon" icon={item.icon.name} />
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
