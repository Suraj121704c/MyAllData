import axios from "axios";
import { ADD_TO_CART, GET_CART_DATA } from "./actionType";

// Add To Cart
export const addToCart = (cartData) => (dispatch) => {
  axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`,
      cartData
    )
    .then((res) => {
    //   console.log(res);
      dispatch({ type: ADD_TO_CART, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get Cart Data
export const getCartData = (dispatch) => {
  axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
    .then((res) => {
      dispatch({ type: GET_CART_DATA, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
