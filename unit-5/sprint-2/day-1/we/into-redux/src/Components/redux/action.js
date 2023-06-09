// {type : ADD,payload : 1} ---> Action

import { ADD } from "./actiontypes";
import { REDUCE } from "./actiontypes";

export const addAction = () => {
  return { type: ADD, payload: 1 };
};

export const reduceAction = () => {
  return { type: REDUCE, payload: 1 };
};
