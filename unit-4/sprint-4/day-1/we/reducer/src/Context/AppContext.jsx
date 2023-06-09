import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

export const AppCountext = createContext();

const intialState = {
  count: 0,
  todos: [],
};

const appReducerFn = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT" : {
        return {
          ...state,
          count : state.count + (payload || 1)
        };
    }
    case "DECREMENT" : {
      return {
        ...state,
        count : state.count - (payload || 1)
      }
    }
    case "RESET": {
       return {
        ...state,
        count : 0
       }
    }
    default: {
      return state;
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducerFn, intialState);
  return (
    <AppCountext.Provider value={[state, dispatch]}>
      {children}
    </AppCountext.Provider>
  );
};

export default AppProvider;
