import "./Signup.css";
import "../../Components.css";
import {
  faGoogle,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Signup() {
  return (
    <div className="loginContainer boxSizing">
      <div className="line"></div>
      <h2> HELLO! WELCOME.</h2>
      <div className="fs14">Let create and explore our products. </div>
      <form className="formContainer">
        <input
          className="inputControl boxSizing"
          type="text"
          placeholder="Enter your name"
        />
        <label className="f14" htmlFor="dateInput">
          * Choose your birthday
        </label>
        <input className="inputControl boxSizing" type="date" id="dateInput" />
        <button className="boxSizing cursor" type="submit">
          NEXT STEP
        </button>
      </form>
      <div>Or, continue with </div>
      <div className="iconContainer">
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faGoogle} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faSquareTwitter} />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
}
