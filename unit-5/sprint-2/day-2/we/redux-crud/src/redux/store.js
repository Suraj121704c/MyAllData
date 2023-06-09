import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const intitalState = {
  counter: 0,
  todos: [],
  isLoading: false,
  isError: false,
};

export const store = legacy_createStore(reducer, intitalState);
// reducer,intitalState
