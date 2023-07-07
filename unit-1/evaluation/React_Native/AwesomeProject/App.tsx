import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './src/Redux/store';
import { AppNavigator } from './src/Assests/Utils/Navigations/AppNavigator';

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
