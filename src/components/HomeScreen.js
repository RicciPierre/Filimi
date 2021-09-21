import React from "react";
import Nav from "./Nav";
import "../css/HomeScreen.css";
import Banner from "./Banner";
import requestsMovies from "./RequestsMovies";
import RowMovies from "./RowMovies";
// import requestsSeries from "./RequestsSeries";
// import RowSeries from "./RowSeries";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <RowMovies
        title="Trending Now"
        fetchUrl={requestsMovies.fetchTrending}
        isLargeRow
      />
      <RowMovies title="Top Rated" fetchUrl={requestsMovies.fetchTopRated} />
      <RowMovies title="Action" fetchUrl={requestsMovies.fetchActionMovies} />
      <RowMovies title="Comedy" fetchUrl={requestsMovies.fetchComedyMovies} />
      <RowMovies title="Horror" fetchUrl={requestsMovies.fetchHorrorMovies} />
      <RowMovies title="Romance" fetchUrl={requestsMovies.fetchRomanceMovies} />
      <RowMovies
        title="Documentaries"
        fetchUrl={requestsMovies.fetchDocumentaries}
      />
      {/* <RowSeries
        title="NETFLIX ORIGINALS"
        fetchUrl={requestsSeries.fetchNetflixOriginals}
        isLargeRow
      />
      <RowSeries title="Trending Now" fetchUrl={requestsSeries.fetchTrending} />
      <RowSeries title="Top Rated" fetchUrl={requestsSeries.fetchTopRated} />
      <RowSeries
        title="Action and Adventure"
        fetchUrl={requestsSeries.fetchActionSeries}
      />
      <RowSeries title="Comedy" fetchUrl={requestsSeries.fetchComedySeries} />
      <RowSeries
        title="Sci-Fi and Fantasy"
        fetchUrl={requestsSeries.fetchFantasySeries}
      />
      <RowSeries title="Drama" fetchUrl={requestsSeries.fetchDramaSeries} />
      <RowSeries
        title="Documentaries"
        fetchUrl={requestsSeries.fetchDocumentaries}
      /> */}
    </div>
  );
};

export default HomeScreen;
