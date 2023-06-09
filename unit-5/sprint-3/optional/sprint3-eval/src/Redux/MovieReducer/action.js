import axios from "axios";
import {
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

// Get
// it will work for single movies also
export const getMovies = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,
      paramObj
    )
    .then((res) => {
      // console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const addProducts = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/movies", data)
    .then((res) => {
      // console.log(res)
      dispatch(ADD_PRODUCT_SUCCESS);
    })
    .catch((err) => {
      // console.log(err)
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// patch
export const editProduct = (dataObj, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:8080/movies/${id}`, dataObj)
    .then((res) => {
      console.log(res);
      dispatch({ type: EDIT_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
