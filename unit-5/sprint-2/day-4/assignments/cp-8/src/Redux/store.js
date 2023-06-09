import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

const customMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

const store = legacy_createStore(reducer, applyMiddleware(customMiddleware));

export { store };
export { customMiddleware };
