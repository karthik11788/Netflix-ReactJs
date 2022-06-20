import React, { useEffect, useState } from "react";
import "./rowpost.css";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants/constant";
import YouTube from "react-youtube";

function Rowpost(props) {
  const [urlId, setUrlId] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            className={props.isSmall ? "smallposter" : "poster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Rowpost;
