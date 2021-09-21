const REACT_APP_TMDB = "56c858993249f9c97886bae81cc28865";

const requestsSeries = {
  fetchTrending: `/tv/popular?api_key=${REACT_APP_TMDB}&language=en-US°`,
  fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_TMDB}&with_networks=213`,
  fetchTopRated: `/tv/top_rated?api_key=${REACT_APP_TMDB}&language=en-US`,
  fetchActionSeries: `/discover/tv?api_key=${REACT_APP_TMDB}&with_genres=10759`,
  fetchComedySeries: `/discover/tv?api_key=${REACT_APP_TMDB}&with_genres=35`,
  fetchFantasySeries: `/discover/tv?api_key=${REACT_APP_TMDB}&with_genres=10765`,
  fetchDramaSeries: `/discover/tv?api_key=${REACT_APP_TMDB}&with_genres=18`,
  fetchDocumentaries: `/discover/tv?api_key=${REACT_APP_TMDB}&with_genres=99`,
};

export default requestsSeries;
