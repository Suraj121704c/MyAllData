import axios from "axios";
import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";

export const getStudents = (paramObj) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST_PENDING });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students?_limit=10`,
      paramObj
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: STUDENT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: STUDENT_REQUEST_FAILURE });
    });
};
