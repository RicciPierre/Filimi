import React from "react";
import "../css/Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <div class="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My list</button>
        </div>
        <p class="banner_description">
          Grinch lives in solitude just outside Whoville. He hates the townsfolk
          and despises Christmas. Cindy Lou, a six-year-old girl who believes in
          the spirit of the festival, sets out to reform him.
        </p>
      </div>

      <div class="banner_fade" />
    </header>
  );
}

export default Banner;
