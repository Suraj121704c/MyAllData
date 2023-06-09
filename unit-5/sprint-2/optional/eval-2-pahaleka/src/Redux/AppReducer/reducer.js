import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DATA_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.DATA_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }
    case types.COFFEE_SUCCESS: {
      return { ...state, isLoading: false, coffeeData: payload };
    }
    case types.REST_SUCCESS: {
      return { ...state, isLoading: false, restaurantData: payload };
    }
    case types.EMP_SUCCESS: {
      return { ...state, isLoading: false, employeeData: payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
