import React, { useState } from "react";

import { GiKey } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

import "./login.scss";

import Cbutton from "../../Components/button/Cbutton";

import { userLogin } from "./action";

function Login({ show, onHide }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const result = await userLogin(data);
    const dataLogin = {
      isLogin: true,
      id: result.data.data._id,
    };
    window.localStorage.setItem("login", JSON.stringify(dataLogin));
    window.location.reload();
  };

  return (
    <div className={show ? "login-show" : "login-off"}>
      <div className="cart-login">
        <h2 className="text-center mt-4">~ LOGIN ~</h2>
        <form>
          <div className="wrapper-input-login">
            <span>
              <MdEmail fontSize="1.3em" /> Email
            </span>
            <p className="mx-1 fw-bold m-0">:</p>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="wrapper-input-login">
            <span>
              <GiKey fontSize="1.3em" /> Password
            </span>
            <p className="mx-1 fw-bold m-0">:</p>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="btn-login">
          <Cbutton
            title="Cancel"
            color="btn-light"
            width="170px"
            margin="me-2"
            border="border border-dark"
            click={onHide}
          />
          <Cbutton
            title="Login"
            color="btn-dark"
            width="170px"
            click={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
