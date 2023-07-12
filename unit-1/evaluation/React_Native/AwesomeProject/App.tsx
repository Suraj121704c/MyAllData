import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

// user Define Import Files
import {store} from './src/Redux/store';
import { AppNavigator } from './src/Navigations/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
