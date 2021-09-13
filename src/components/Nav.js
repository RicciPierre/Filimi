import React, { useEffect, useState } from "react";
import filimi_banner from "../img/filimi_banner.png";
import "../css/Nav.css";
import LoginButton from "./LoginBtn";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img className="nav_logo" src={filimi_banner} alt="nav_logo" />
        <LoginButton />
      </div>
    </div>
  );
};

export default Nav;
