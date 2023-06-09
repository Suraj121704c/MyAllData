import axios from "axios";
import { ADD_TO_CART } from "./actionTypes";

export const addToCart = (cartData) => (dispatch) => {
  // Complete add to cart store functionality
  axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`,
      cartData
    )
    .then((res) => {
      console.log(res);
      dispatch(addAction(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCartProducts = () => {
  // Complete get carts functionality here
  axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
    .then((res) => {
      return res.data;     
    })
    .catch((err) => {
      console.log(err);
    });
};

const addAction = (payload) => {
  return { type: ADD_TO_CART, payload };
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}
