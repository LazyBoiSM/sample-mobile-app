import { useContext, useState } from "react";
import "./Share.css";
import "../../Components.css";
import { Context } from "../../context/Context";

function Share() {
  const { login, setLogin } = useContext(Context);
  const noActive = {
    transform: "translateX(200px)",
  };
  const active = {
    transform: "translateX(0px)",
  };
  return (
    <div className="loginControl">
      <div className="userSelectN boxSizing colorWhite loginToogle">
        <div className="loginSlider" style={login ? active : noActive}></div>
        <div
          onClick={() => {
            setLogin(true);
          }}
          className="cursor"
          style={login ? { color: "#fff" } : { color: "#000080" }}
        >
          Login
        </div>
        <div
          onClick={() => {
            setLogin(false);
          }}
          className="cursor"
          style={login ? { color: "#000080" } : { color: "#fff" }}
        >
          Signup
        </div>
      </div>
    </div>
  );
}

export default Share;
