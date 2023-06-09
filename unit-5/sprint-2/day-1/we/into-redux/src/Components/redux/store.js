import { legacy_createStore } from "redux";
import { reducer } from "./reducer.js";

const initialState = {
  counter: 0,
};

export const store = legacy_createStore(reducer, initialState);
// reducer
// initialStore
