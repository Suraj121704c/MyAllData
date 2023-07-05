import React from 'react';
import Login from './src/Screens/BeforeLogin/Login/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Forget} from './src/Screens/BeforeLogin/Forget/Forget';
import {SignIn} from './src/Screens/BeforeLogin/SignIn/SignIn';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    // <View>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
