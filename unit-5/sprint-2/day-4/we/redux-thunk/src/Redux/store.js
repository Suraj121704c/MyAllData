import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { compose } from "redux";

// a function returning to other then other to other

const myMiddleWare = (store) => (dispatch) => (action) => {
  //    console.log("store" , store)
  //    console.log("dispatch" , dispatch)
  //    console.log("action" , action)

  if (typeof action === "function") {
    return action(dispatch);
  }

  return dispatch(action);

  // if action is a function
  // dispatch(getTodo) ---> getTodo(dispatch)

  // if action is a plain object
  // dispatch(action)
};

// thunk is a middle ware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(myMiddleWare))
);
