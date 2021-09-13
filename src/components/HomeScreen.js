import React from "react";
import Nav from "./Nav";
import "../css/HomeScreen.css";
import Banner from "./Banner";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {/* Row */}
    </div>
  );
};

export default HomeScreen;
