import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import filimi_avatar from "../img/filimi_avatar.png";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

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
    <img
      className={`nav_avatar ${show && "nav_avatar_bg"}`}
      src={filimi_avatar}
      alt="nav_avatar"
      onClick={() => loginWithRedirect()}
    />
  );
};

export default LoginButton;
