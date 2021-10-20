import React from "react";
import Nav from "../components/Nav";
import "../css/HomeScreen.css";
import Banner from "../components/Banner";
import requestsMovies from "../components/RequestsMovies";
import RowMovies from "../components/RowMovies";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <RowMovies
        title="Trending"
        fetchUrl={requestsMovies.fetchTrending}
        isLargeRow
      />
      <RowMovies
        title="Popular"
        fetchUrl={requestsMovies.fetchTopRated}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
