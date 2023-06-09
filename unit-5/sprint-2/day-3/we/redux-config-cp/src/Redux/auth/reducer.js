import { getData, setData } from "../../Utils/getData";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionType";

const initialState = {
  auth: getData("auth"),
  token: "",
  isError: false,
  isLoading: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case USER_LOGIN_SUCCESS: {
        setData("token",state.token )
        setData("auth",state.auth)
      return { ...state, isLoading: false, token: payload, auth: true };
    }
    case USER_LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
