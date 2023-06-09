import axios from "axios";
import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionType";

const todoRequestAction = () => {
  return { type: TODO_REQUEST };
};

const todoFailureAction = () => {
  return { type: TODO_FAILURE };
};

const getTodoAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

const postTodoAction = () => {
  return { type: POST_TODO_SUCCESS };
};

export const getTodo = (dispatch) => {
  // This is action
  dispatch(todoRequestAction());
  axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      dispatch(getTodoAction(res.data));
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch(todoFailureAction());
    });
};


// if u make it as a async function to return a promise to avoid return word
export const addTodo = (title) => (dispatch) => {
  const obj = {
    title,
    statu: false,
  };
  dispatch(todoRequestAction());
  return axios
    .post(`http://localhost:8080/todos`, obj)
    .then((res) => {
      dispatch(postTodoAction());
    })
    .catch((err) => {
      console.log(err);
      dispatch(todoFailureAction());
    });
};
