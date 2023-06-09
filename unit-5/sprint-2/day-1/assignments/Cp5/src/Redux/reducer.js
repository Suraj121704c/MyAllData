//Complete the reducer function logic inside the curly braces {}
import { ADD } from "./actionTypes";
import { REDUCE } from "./actionTypes";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD: {
      return { ...state, counter: state.counter + payload };
    }
    case REDUCE: {
      return { ...state, counter: state.counter - payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
