import { ADD, REDUCE } from "./actionTypes";

export const addAction = (payload) => {
  return { type: ADD, payload };
};

export const reduceAction = (payload) => {
  return { type: REDUCE, payload };
};
