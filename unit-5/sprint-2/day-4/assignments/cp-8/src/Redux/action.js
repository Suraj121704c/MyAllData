import {
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

//action creator functions here
const todoGetRequest = () => {
  return { type: GET_TODOS_REQUEST };
};

const todoGetSuccess = (payload) => {
  return { type: GET_TODOS_SUCCESS, payload };
};

const todoGetFailure = () => {
  return { type: GET_TODOS_ERROR };
};

const postGetRequest = () => {
  return { type: ADD_TODOS_REQUEST };
};

const postGetSuccess = (payload) => {
  return { type: ADD_TODOS_SUCCESS, payload };
};

const postGetFailure = () => {
  return { type: ADD_TODOS_ERROR };
};

export const getTodos = (dispatch) => {
  dispatch(todoGetRequest());
  axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((res) => {
      dispatch(todoGetSuccess(res.data));
    })
    .catch((err) => {
      dispatch(todoGetFailure());
    });
};

export const addTodo = (title) => (dispatch) => {
  const obj = {
    title,
    statu: false,
  };
  dispatch(postGetRequest());
  return axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
      obj
    )
    .then((res) => {
      dispatch(postGetSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(postGetFailure());
    });
};
