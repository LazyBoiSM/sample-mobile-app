import "./Account.css";
import "../../Components.css";
import Share from "../share/Share";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Login } from "../login/Login";
import { Signup } from "../signup/Signup";

function Account() {
  const { login } = useContext(Context);
  return (
    <div>
      <Share />
      <div>{login ? <Login /> : <Signup />}</div>
    </div>
  );
}

export default Account;
