import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovies } from "../Redux/MovieReducer/action";
import { addToCart } from "../Redux/CartReducer/action";

export const MovieDetail = () => {
  const { id } = useParams();
  // console.log(id)
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const product = useSelector((store) => {
    return store.movieReducer.movies;
  });

  useEffect(() => {
    dispatch(getMovies);
    const data = product.find((el) => el.id === +id);
    setData(data);
  }, []);

  // console.log(data);
  const handleAdd = () => {
    const cartData = {
      Poster: data.Poster,
      Title: data.Title,
      Type: data.Type,
      rating: data.rating,
      Year: data.Year,
    };
    dispatch(addToCart(cartData));
  };

  return (
    <div>
      <h3 className="movie-id">
        {/* Show Movie Id here, Do not add any extra text */}
        {id}
      </h3>
      <img src={data.Poster} alt="img" className="movie-image" />
      <h1 className="movie-name">{data.Title}</h1>
      <p className="movie-year">{data.Year}</p>
      <p className="movie-type">{data.Type}</p>
      <p className="movie-rating">{data.rating}</p>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
      &nbsp;&nbsp;
      <button onClick={handleAdd}>addToCart</button>
    </div>
  );
};
