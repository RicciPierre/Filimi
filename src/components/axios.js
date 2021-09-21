import axios from "axios";

// const REACT_APP_ID = process.env;

const instance = axios.create({
  // baseURL: "https://api.themoviedb.org/3",
  baseURL: "https://api.trakt.tv",
});

// let url = `${instance}/oauth/authorize?response_type=code&client_id=c5c44e51fbfa6b8beaf355c7cc1151e4c37545a6bef1143ea51cdd8ac45052d3&redirect_uri=http://localhost:3000/`;

// const params = new URLSearchParams(window.location.search);

// let code = params.get("code");

export default instance;
