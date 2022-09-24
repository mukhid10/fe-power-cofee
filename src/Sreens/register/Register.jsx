import React, { useState } from "react";

import Cbutton from "../../Components/button/Cbutton";

import { GiKey } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BsTelephoneXFill } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";

import { userRegister } from "./action";

import "./register.scss";

function Register({ show, onHide }) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = async () => {
    const data = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };
    await userRegister(data);
    window.location.reload();
  };

  return (
    <div className={show ? "register-show" : "register-off"}>
      <div className="cart-register">
        <h2 className="text-center mt-4">~ Register ~</h2>
        <form>
          <div className="wrapper-input-register">
            <span>
              <BsFillFilePersonFill fontSize="1.3em" /> Name
            </span>
            <p className="mx-1 fw-bold m-0">:</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="wrapper-input-register">
            <span>
              <BsTelephoneXFill fontSize="1.3em" /> Phone
            </span>
            <p className="mx-1 fw-bold m-0">:</p>
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="wrapper-input-register">
            <span>
              <MdEmail fontSize="1.3em" /> Email
            </span>
            <p className="mx-1 fw-bold m-0">:</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="wrapper-input-register">
            <span>
              <GiKey fontSize="1.3em" /> Password
            </span>
            <p className="mx-1 fw-bold m-0">:</p>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </form>
        <div className="btn-register">
          <Cbutton
            title="Cancel"
            color="btn-light"
            width="170px"
            margin="me-2"
            border="border border-dark"
            click={onHide}
          />
          <Cbutton
            title="Register"
            color="btn-dark"
            width="170px"
            click={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
