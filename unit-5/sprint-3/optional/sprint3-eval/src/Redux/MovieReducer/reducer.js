import {
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  SINGLE_MOVIE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, movies: payload };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case ADD_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case EDIT_PRODUCT_SUCCESS : {
      return {...state , isLoading : false}
    }
    default: {
      return state;
    }
  }
};
