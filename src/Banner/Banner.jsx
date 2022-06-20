import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../constants/constant";
import axios from "../axios";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const sorted = response.data.results.sort(() => Math.random() - 0.5);
        setMovie(sorted[0]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="action_buttons">
          <button className="button">Play</button>
          <button className="button">Mylist</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
    </div>
  );
}

export default Banner;
