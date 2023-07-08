import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_SUCCESS, LOGOUT} from '../Type';
import {showMessage} from 'react-native-flash-message';

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (username, password) => {
  return async dispatch => {
    try {
      if (username === 'suraj@gmail.com' && password === '123') {
        console.log('Login successful');
        const token = '1234suraj';
        await AsyncStorage.setItem('token', token);
        dispatch(loginSuccess(token));
        showMessage({
          message: 'Login Successful',
          type: 'success',
        });
        console.log(AsyncStorage.getItem('token'));
      } else {
        console.log('Login failed: Invalid username or password');
        showMessage({
          message: error.message,
          type: 'danger',
        });
      }
    } catch (error) {
      console.log('Login failed:', error.message);
      showMessage({
        message: "Invalid username or password",
        type: 'danger',
      });
    }
  };
};

export const logoutAction = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    console.log('Logout Successful');
    showMessage({
      message: 'Logout Successful',
      type: 'success',
    });
    dispatch(logout());
  };
};
