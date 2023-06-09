// const intialState = {
//   isLoading : true,
//   isError : false,
//   data : null
// }

function userReducer(state, action) {
  switch (action.type) {
    case "GET_USER_REQUEST": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: null,
      };
    }
    case "GET_USER_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    }
    case "GET_USER_FAILURE": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
