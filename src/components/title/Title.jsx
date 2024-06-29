import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Title.css";
import "../Components.css";
import Button from "../button/Button";
import "../Components.css";
import Toogle from "../toogle/Toogle";

function Title() {
  return (
    <div className="titleContainer">
      <div>
        <form>
          <input
            className="boxSizing cursor search"
            type="text"
            placeholder="search a product.."
          />
          <button className="boxSizing cursor" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span className="f14">search</span>
          </button>
        </form>
      </div>
      <div className="dropdown f14">
        <div className="cursor">
          <FontAwesomeIcon icon={faGlobe} />
          <span className="mgL">Launguage</span>
        </div>
        <div className="dropdown-content f14 boxSizing">
          <div className="cursorNone mgB">Choose your language</div>
          <form>
            <input
              className="cursor"
              type="radio"
              id="English"
              defaultChecked
              name="language"
              value="English"
            />
            <label className="cursor" htmlFor="English">
              English
            </label>
            <br />
            <input
              className="cursor"
              type="radio"
              id="Myanmar"
              name="language"
              value="Myanmar"
            />
            <label className="cursor" htmlFor="Myanmar">
              Myanmar
            </label>
            <br />
          </form>
        </div>
      </div>
      <Toogle />
      <FontAwesomeIcon className="cart cursor" icon={faCartShopping} />
      <Button name="signup" />
    </div>
  );
}

export default Title;
