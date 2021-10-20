const TMDB = "56c858993249f9c97886bae81cc28865";

const requestsMovies = {
  fetchTrending: `/movie/popular?api_key=${TMDB}&language=en-US°`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${TMDB}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${TMDB}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${TMDB}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${TMDB}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${TMDB}&with_genres=99`,
};

export default requestsMovies;
