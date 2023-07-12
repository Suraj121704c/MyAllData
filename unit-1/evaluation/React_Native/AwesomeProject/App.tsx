import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import {AppNavigator} from './src/Assests/Utils/Navigations/AppNavigator';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
