//DO NOT change the function names

import { ADD, REDUCE, CHANGE_THEME } from "./actionTypes";

const handleAdd = (payload) => {
  return { type: ADD, payload };
};

const handleReduce = (payload) => {
  return { type: REDUCE, payload };
};
const handleTheme = (payload) => {
  return { type: CHANGE_THEME, payload };
};

export { handleAdd, handleReduce, handleTheme };
