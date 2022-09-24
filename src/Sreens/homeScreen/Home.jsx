import React from "react";

import Navigation from "../navigation/Navigation";

import { handKopi } from "../../Assets";

import "./home.scss";

import { BsArrowBarRight } from "react-icons/bs";

import Cbutton from "../../Components/button/Cbutton";
import Cofee from "../cofee/Cofee";
import Promo from "../promo/Promo";

function Home() {
  const login = JSON.parse(window.localStorage.getItem("login"));
  const isLogin = login ? login.isLogin : false;

  return (
    <div>
      <div className="home-screen">
        <div className="container home">
          <div className="row">
            <div className="col-sm-6 col-xs-12  home-left">
              <p className="tag-line">Make a Fresh</p>
              <p className="home-description">
                Coffee is one of the most popular drinks in the country. In
                fact, not a few people are obliged to drink coffee before
                starting their activities in the morning. Not surprisingly,
                drinking coffee can improve mood and eliminate sleepiness.
              </p>
              <Cbutton
                title="Buy Now"
                icon={<BsArrowBarRight fontSize="1.4em" />}
                color="btn-light"
                width="130px"
              />
            </div>
            <div className="col-sm-6 col-xs-12  home-right">
              <img className="image-right" src={handKopi} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-cofee">
        <Cofee />
        <Promo />
      </div>
    </div>
  );
}

export default Home;
