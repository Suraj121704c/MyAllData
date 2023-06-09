import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({
  id,
  Title,
  Year,
  imdbID,
  Type,
  rating,
  Poster,
}) => {
  return (
    <div
      className={"movie-card"}
      
    >
      <Link to={`/movie/${id}`}>
        <img src={Poster} alt="img" className="movie-image" />
      </Link>
      <h1 className="movie-name">{Title}</h1>
      <p className="movie-year">{Year}</p>
      <p className="movie-type">{Type}</p>
      <p className="movie-rating">{rating}</p>
    </div>
  );
};
