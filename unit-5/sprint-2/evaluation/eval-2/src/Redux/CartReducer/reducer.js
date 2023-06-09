import { ADD_TO_CART } from "./actionTypes";

const initState = {
  cart: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, cart: { ...state.cart, ...payload } };
    }
    default: {
      return state;
    }
  }
};
