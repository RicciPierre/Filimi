import axios from "axios";

// const REACT_APP_ID = process.env;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
