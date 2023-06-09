import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionType";

// post
export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// Get
export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// patch
export const editProduct = (dataObj, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:8080/products/${id}`, dataObj)
    .then((res) => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
