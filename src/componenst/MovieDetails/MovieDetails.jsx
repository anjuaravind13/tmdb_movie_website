import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import './MovieDetails.css';

function MovieDetails() {
  let [data, setData] = useState(null);
  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fd4b30342ad1e549fd5de7e9f26c06b1`
      )
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(!data){


    return  <p>Loading</p>

  }

  return (
    <div className="section">
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
              <p>
                {" "}
                <strong>Rating:</strong>
                {data.vote_average}
              </p>
            </div>
          </div>
       
      </div>
    </div>
  );
}

export default MovieDetails;

// import React from "react";
// import "./MovieDetails.css";

// function MovieDetails() {
//   return (
//     //  <div className="heading">MOVIE DETAILS</div>

//     <div className="mov">
//       <div className="movie">
//         <img
//           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00404167-yytjflejum-portrait.jpg"
//           alt=""
//         />
//         <div className="movieTitle">Pani</div>
//         <div>Action/Crime/Drama</div>
//       </div>
//       <div className="movie">
//         <img
//           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxOC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413069-efelznfzeq-portrait.jpg"
//           alt=""
//         />
//         <div className="movieTitle">Bougainvillea</div>
//         <div className="movieGenre">Crime/Thriller</div>
//       </div>
//       <div className="movie">
//         <img
//           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAzMy4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-rdwhyyeehq-portrait.jpg"
//           alt=""
//         />
//         <div className="movieTitle">Venom: The Last Dance</div>
//         <div className="movieGenre">Action/Adventure/Sci-Fi</div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;

// // import React from 'react';

// // const MovieDetails = ({ title, year, director, genre, description }) => {
// //     return (
// //         <div style={styles.container}>
// //             <h1 style={styles.title}>{title}</h1>
// //             <p style={styles.year}>Year: {year}</p>
// //             <p style={styles.director}>Director: {director}</p>
// //             <p style={styles.genre}>Genre: {genre}</p>
// //             <p style={styles.description}>{description}</p>
// //         </div>
// //     );
// // };

// // const styles = {
// //     container: {
// //         border: '1px solid #ccc',
// //         borderRadius: '8px',
// //         padding: '20px',
// //         margin: '20px',
// //         backgroundColor: '#f9f9f9',
// //         boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// //     },
// //     title: {
// //         fontSize: '2em',
// //         marginBottom: '10px',
// //     },
// //     year: {
// //         fontWeight: 'bold',
// //     },
// //     director: {
// //         fontStyle: 'italic',
// //     },
// //     genre: {
// //         color: '#555',
// //     },
// //     description: {
// //         marginTop: '10px',
// //         lineHeight: '1.5',
// //     },
// // };

// // export default MovieDetails;
