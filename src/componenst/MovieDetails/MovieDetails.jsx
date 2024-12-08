import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { Link } from "react-router-dom";


function MovieDetails() {
  const [data, setData] = useState(null);
  const [dataExist, setDataExist] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fd4b30342ad1e549fd5de7e9f26c06b1`
      )
      .then((result) => {
        console.log(result);
        setData(result.data);

        setDataExist(true);
      })
      .catch((err) => {
        console.log(err);

        setData("no data available");
        setDataExist(false);
      });
  }, [id]);

  if (!data) {
    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  }

  if (!dataExist) {
    return (
      <div>
        <h1>NO DATA AVALABLE</h1>
      </div>
    );
  }

  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}
    >
      <div className="backdrop">
        <div className="movie-details">
          <div className="movie-info">
            <div className="movie-img">
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.title}
              />
            </div>
            <div className="movie-title">
              <h1>{data.title}</h1>
              <p>{data.overview}</p>
              <p>
                <strong>Release Date:</strong> {data.release_date}
              </p>
              <p className="rating">
                <strong>Rating:</strong>

                <div className="rating-bar-container">
                  <div
                    className="rating-bar-fill"
                    style={{
                      width: `${(data.vote_average / 10) * 100}%`,
                    }} 
                  ></div>
                  <span className="rating-value-text">{data.vote_average}</span>
                </div>
              </p>

              <Link to={`/movie/${id}/trailer`} className="button">
                View Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

