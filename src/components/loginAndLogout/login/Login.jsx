import "./Login.css";
import "../../Components.css";
import {
  faGoogle,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Login() {
  return (
    <div className="loginContainer boxSizing">
      <div className="line"></div>
      <h2>WELCOME BACK!</h2>
      <div className="fs14">Login and, deserves our services and products </div>
      <form className="formContainer">
        <input
          className="inputControl boxSizing"
          type="text"
          placeholder="Enter phone number or email"
        />
        <input
          className="inputControl boxSizing"
          type="password"
          placeholder="Enter password"
        />
        <div className="checkboxContainer">
          <input type="checkbox" />
          <span className="f14">remember me</span>
        </div>
        <a href="#" className="f14">
          Forgot password?
        </a>
        <button className="boxSizing cursor" type="submit">
          Login
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
