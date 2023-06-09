import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const MovieList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const products = useSelector((store) => {
    return store.movieReducer.movies;
  });

  let obj = {
    params: {
      rating: searchParams.getAll("rating"),
      _sort: searchParams.get("order") && "Year",
      _order: searchParams.get("order"),
      q: searchParams.get("q"),
    },
  };

  useEffect(() => {
    dispatch(getMovies(obj));
  }, [location.search]);

  // console.log(products)

  return (
    <div
      data-testid="movie-list"
      style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
    >
      {products.length > 0 &&
        products.map((el) => <MovieCard key={el.id} {...el} />)}
    </div>
  );
};
