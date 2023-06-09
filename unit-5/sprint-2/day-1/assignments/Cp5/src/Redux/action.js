//DO NOT change the function names
import { ADD } from "./actionTypes";
import { REDUCE } from "./actionTypes";

//function to return the add action object
const handleAddActionObj = (payload) => {
  return { type: ADD, payload: payload };
};

//function to return the reduce action object
const handleReduceActionObj = (payload) => {
  return { type: REDUCE, payload: payload };
};

export { handleAddActionObj, handleReduceActionObj };
