const REACT_APP_TMDB = "56c858993249f9c97886bae81cc28865";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${REACT_APP_TMDB}&language=en-US°`,
  fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_TMDB}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_TMDB}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_APP_TMDB}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_TMDB}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_TMDB}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_TMDB}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${REACT_APP_TMDB}&with_genres=99`,
};

export default requests;
