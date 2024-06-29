import "./Button.css";
import "../Components.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

function Button({ name }) {
  const { login, setLogin } = useContext(Context);
  const navigate = useNavigate();
  const handler = (name) => {
    navigate("/account");
    const newName = name.toLowerCase();
    if (newName === "login") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <button className="login boxSizing cursor" onClick={() => handler(name)}>
      {name}
    </button>
  );
}

export default Button;
