import {
  COFFEE_SUCCESS,
  DATA_FAILED,
  DATA_REQUEST,
  EMP_SUCCESS,
  REST_SUCCESS,
} from "./actionType";
import axios from "axios";

const dataRequestAction = () => {
  return { type: DATA_REQUEST };
};

const dataRequestFailed = () => {
  return { type: DATA_FAILED };
};

const dataCoffeeAction = (payload) => {
  return { type: COFFEE_SUCCESS, payload };
};

const dataRestAction = (payload) => {
  return { type: REST_SUCCESS, payload };
};
const dataEmpAction = (payload) => {
  return { type: EMP_SUCCESS, payload };
};

export const coffeeData = (dispatch) => {
  dispatch(dataRequestAction());
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
    )
    .then((res) => {
      dispatch(dataCoffeeAction(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(dataRequestFailed());
    });
};

export const restData = (dispatch) => {
  dispatch(dataRequestAction());
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
    )
    .then((res) => {
      dispatch(dataRestAction(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(dataRequestFailed());
    });
};

export const empData = (dispatch) => {
  dispatch(dataRequestAction());
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
    )
    .then((res) => {
      dispatch(dataEmpAction(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(dataRequestFailed());
    });
};
