import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  // Complete login Functionality
  dispatch(loginRequestAction());
  axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch(loginSuccessAction(res.data.token));
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailureAction());
    });
};

const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailureAction = () => {
  return { type: LOGIN_FAILURE };
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
