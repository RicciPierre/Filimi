import React, { useEffect, useState } from "react";
import filimi_banner from "../img/filimi_banner.png";
import filimi_avatar from "../img/filimi_avatar.png";
import "../css/Nav.css";

const Nav = (movies = true, series = false) => {
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
        <button className="nav_btnMovies">Movies</button>
        <button className="nav_btnSeries">Series</button>
        <img
          className={`nav_avatar ${show && "nav_avatar_bg"}`}
          src={filimi_avatar}
          alt="nav_avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
