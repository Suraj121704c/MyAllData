import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export const store = legacy_createStore(rootReducer);
