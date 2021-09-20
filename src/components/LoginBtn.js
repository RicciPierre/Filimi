import React, { useEffect, useState } from "react";
import filimi_avatar from "../img/filimi_avatar.png";
// import url from "./axios";

const LoginButton = () => {
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
    // <a href={url}>
    <img
      className={`nav_avatar ${show && "nav_avatar_bg"}`}
      src={filimi_avatar}
      alt="nav_avatar"
    />
    // </a>
  );
};

export default LoginButton;
