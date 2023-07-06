import React from 'react';
import Login from './src/Screens/BeforeLogin/Login/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Forget} from './src/Screens/BeforeLogin/Forget/Forget';
import {SignIn} from './src/Screens/BeforeLogin/SignIn/SignIn';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Login} />
    <Stack.Screen name="Forget" component={Forget} />
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
