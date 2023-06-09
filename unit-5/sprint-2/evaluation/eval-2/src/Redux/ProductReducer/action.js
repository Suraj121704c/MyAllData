import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getProducts = (dispatch) => {
  // Complete get products functionality here
  dispatch(dataRequest());
  axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    .then((res) => {
      // console.log(res.data)
      dispatch(dataSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(dataFailure());
    });
};

export const sort =  (sort) => (dispatch) => {
  dispatch(dataRequest())
  axios
  .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products?_sort=price&_order=${sort}`)
  .then((res) => {
    // console.log(res.data)
    dispatch(dataSuccess(res.data));
  })
  .catch((err) => {
    console.log(err);
    dispatch(dataFailure());
  });
}

const dataRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const dataSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
const dataFailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
