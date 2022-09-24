import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useStore } from "../../zustand/reducer";

import { BsCartDash } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

import Login from "../Login/Login";
import Register from "../register/Register";

import { getCartByUserId } from "./action";

import "./navigation.scss";
import Footer from "../footer/Footer";

function Navigation() {
  const login = JSON.parse(window.localStorage.getItem("login"));
  const isLogin = login ? login.isLogin : false;
  const id = login ? login.id : false;

  const useSelector = useStore((state) => state);

  const [modalShow, setModalShow] = useState();
  const [registerShow, setRegisterShow] = useState();
  const [cart, setCart] = useState();

  useEffect(() => {
    handleGetCart();
  }, []);

  const handleGetCart = async () => {
    const result = await getCartByUserId(id);
    setCart(result.data.products);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="wrapper-navigation">
      <div className="container-fluid navigation-fluid">
        <div className="container navigation">
          <ul className="right-navigation">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <li className="brand">POWER COFEE</li>
            </Link>
          </ul>
          <ul className="left-navigation">
            <Link
              to={"/cofee"}
              style={{ textDecoration: "none", color: "white" }}
              id="cofee"
            >
              <li>COFEE'S</li>
            </Link>
            <Link
              to={"/discount"}
              style={{ textDecoration: "none", color: "white" }}
              id="discount"
            >
              <li>DISCOUNT'S</li>
            </Link>
            {isLogin ? (
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <li className="d-flex">
                  CART <BsCartDash color="white" fontSize="1.3em" />{" "}
                  <div className="cart-number">{useSelector.cart}</div>
                </li>
              </Link>
            ) : (
              <div className="d-flex ms-2">
                <li
                  type="button"
                  className="btn btn-light me-2"
                  onClick={() => setModalShow(true)}
                >
                  Login
                </li>
                <li
                  type="button"
                  className="btn btn-dark border border-light"
                  onClick={() => setRegisterShow(true)}
                >
                  Register
                </li>
              </div>
            )}
          </ul>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
          <Register show={registerShow} onHide={() => setRegisterShow(false)} />
        </div>
        {isLogin && (
          <div className="logout" onClick={handleLogout}>
            <RiLogoutCircleLine color="white" fontSize="1.7em" />
            <span>LogOut</span>
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigation;
