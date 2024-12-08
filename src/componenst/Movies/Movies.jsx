import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./Movies.css";
import axios from "axios";
import { Link } from "react-router-dom";

let TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN

function Movies() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
        params: {
          language: "en-US",
        },
        headers: {
          Authorization: TMDB_TOKEN,
        },
      })
      .then((result) => {
        console.log(result);
        setData(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <>
    <div className="movie-section">
      <div className="movies-container">
        {data.map((obj, index) => {
          return (
            <div key={obj.id}>
              <Link to={`/movie/${obj.id}`} className="movie-link">
                <div className="movie-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                    alt=""
                  />
                  <h1>{obj.title ? obj.title : "no title"}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </>

  
  );
}

export default Movies;
