import axios from "axios";
import { COFFEE_DATA, EMPLOYEE_DATA, RESTAURENT_DATA } from "./actionType";

export const coffeeDataAction = (dispatch) => {
  axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
    )
    .then((res) => {
      dispatch({ type: COFFEE_DATA, payload: res.data.data });
    });
};

export const employeeDataAction = (dispatch) => {
  axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
    )
    .then((res) => {
      dispatch({ type: EMPLOYEE_DATA, payload: res.data.data });
    });
};


export const restaurantDataAction = (dispatch) => {
  axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
    )
    .then((res) => {
      dispatch({ type: RESTAURENT_DATA, payload: res.data.data });
    });
};
