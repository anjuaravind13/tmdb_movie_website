import React, { useState } from "react";
 import "./Search1.css";

import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [data, setData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(!false);

  function getMovies(event) {
    const query = event.target.value;

    console.log(query);
    console.log(query);

    if (true) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
          params: {
            language: "en-US",
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDRiMzAzNDJhZDFlNTQ5ZmQ1ZGU3ZTlmMjZjMDZiMSIsIm5iZiI6MTczMDI3NTM2NS4wMjk2MTU5LCJzdWIiOiI2NzIxZTc3MDgyNmZlNTc5OWNjNGFiMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XMXWGbzauQv2Zx11GGDa_-BXdjk0p2AVLPyXInuf5-o",
          },
        })
        .then((result) => {
          console.log(result);

          setData(result.data.results.slice(0, 5));
          setShowSuggestions(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      
    }
  }

  function handleSuggestionsClick() {
    setShowSuggestions(false);
  }

  return (
    <div>
      <input type="search" placeholder="search here..." onChange={getMovies} />

      {/* {showSuggestions && ( */}
      <div className="search">
        {data.map((obj, index) => (
          <Link
            to={`/movies/${obj.id}`}
            //  onClick={handleSuggestionsClick}
            key={obj.id}
          >
            <div className="search-img">
              <img
                src={`https://image.tmdb.org/t/p/w500/${obj?.poster_path}`}
                alt={obj.title}
              />

              <h1>{obj?.title}</h1>
            </div>
          </Link>
        ))}
      </div>
      {/* )} */}
    </div>
  );
}

export default Search;
