import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
} from "./actionTypes";

export const todoRequestAction = () => {
  return { type: GET_TODO_REQUEST };
};

export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const todoRequestFailureAction = () => {
  return { type: GET_TODO_FAILURE };
};

export const postRequestAction = () => {
  return { type: POST_TODO_REQUEST };
};

export const postSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const postFailureAction = () => {
  return { type: POST_TODO_FAILURE };
};
