import {
  ADD,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  REDUCE,
} from "./actionTypes";

export const addAction = (payload) => {
  return { type: ADD, payload };
};

export const reduceAction = (payload) => {
  return { type: REDUCE, payload };
};

export const todoRequestAction = () => {
  return { type: GET_TODO_REQUEST };
};

export const todoRequestSuccessAction = (payload) => {
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

