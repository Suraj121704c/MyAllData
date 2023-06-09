import { legacy_createStore, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";


const store = legacy_createStore(AppReducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}