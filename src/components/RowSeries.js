import axios from "./axios";
import React, { useEffect, useState } from "react";
import "../css/Row.css";

function RowSeries({ title, fetchUrl, isLargeRow = false }) {
  const [series, setSeries] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setSeries(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {series.map((serie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={serie.id}
            src={`${base_url}${serie.poster_path}`}
            alt={serie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default RowSeries;
