import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_SUCCESS, LOGOUT} from '../Type';
// Logout ji

export const getInitialAuthState = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return {
      isLoggedIn: true,
      token: token || null,
    };
  } catch (error) {
    console.log('Error retrieving token :', error.message);
    return {
      isLoggedIn: false,
      token: null,
    };
  }
};

let initialState = {
  isLoggedIn: false,
  token: null,
};

AsyncStorage.getItem('token')
  .then(token => {
    if (token) {
      initialState.isLoggedIn = true;
      initialState.token = token;
    }
  })
  .catch(error => {
    console.log('Error retrieving token:', error.message);
  });

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};
