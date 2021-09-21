import axios from "./axios";
import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import requestsMovies from "./RequestsMovies";

function Banner() {
  const [movie, setMovie] = useState([]);

  // function truncate(string, n) {
  //   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  // }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestsMovies.fetchPopular, {
        headers: {
          "Content-Type": "application/json",
          "tratk-api-version": "2",
          "trakt-api-key":
            "c5c44e51fbfa6b8beaf355c7cc1151e4c37545a6bef1143ea51cdd8ac45052d3",
        },
      });
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 3)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
    // className="banner"
    // style={{
    //   paddingTop: "10rem",
    //   backgroundSize: "cover",
    //   height: "100%",
    //   backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.tmdb}")`,
    //   backgroundPosition: "center center",
    // }}
    >
      {/* <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_btns">
          <button className="banner_btn" id="banner_btn_play">
            Play
          </button>
          <button className="banner_btn" id="banner_btn_list">
            My list
          </button>
        </div>
        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner_fade" /> */}
    </header>
  );
}

export default Banner;
