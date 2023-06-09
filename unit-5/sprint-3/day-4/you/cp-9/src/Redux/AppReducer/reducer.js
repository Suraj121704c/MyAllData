import * as types from "./actionType";

const initialState = {
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.COFFEE_DATA: {
      return { ...state, coffeeData: payload };
    }
    case types.RESTAURENT_DATA: {
      return { ...state, restaurantData: payload };
    }
    case types.EMPLOYEE_DATA: {
      return { ...state, employeeData: payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
