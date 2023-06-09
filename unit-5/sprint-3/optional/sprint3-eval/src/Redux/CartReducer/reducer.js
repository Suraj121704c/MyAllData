import { ADD_TO_CART, GET_CART_DATA } from "./actionType";

const initState = {
  cart: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, cart: { ...state, cart: payload } };
    }
    case GET_CART_DATA : {
        return {...state , cart : payload}
    }
    default: {
      return state;
    }
  }
};
