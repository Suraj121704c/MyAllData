import React from 'react';
import Login from './src/Screens/BeforeLogin/Login/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Forget} from './src/Screens/BeforeLogin/Forget/Forget';
import {SignIn} from './src/Screens/BeforeLogin/SignIn/SignIn';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Products} from './src/Screens/AfterLogin/Products';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Forget" component={Forget} />
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const TabNaviagtion = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Tab.Screen name="Home" component={StackNavigation} />
    <Tab.Screen name="Products" component={Products} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <TabNaviagtion />
    </NavigationContainer>
  );
};

export default App;
