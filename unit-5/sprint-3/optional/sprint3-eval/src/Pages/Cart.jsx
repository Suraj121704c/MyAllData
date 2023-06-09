import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/CartReducer/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => {
    return store.cartReducer.cart;
  });

  useEffect(() => {
    dispatch(getCartData);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {cart.length > 0 &&
        cart.map((el) => (
          <div key={el.id}>
            <img src={el.Poster} alt="img" className="movie-image" />
            <h1 className="movie-name">{el.Title}</h1>
            <p className="movie-year">{el.Year}</p>
            <p className="movie-type">{el.Type}</p>
            <p className="movie-rating">{el.rating}</p>
          </div>
        ))}
    </div>
  );
};

export default Cart;
