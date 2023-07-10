import React from 'react';
import { View, Text, Button } from 'react-native';
import { logoutAction } from '../../Redux/Actions/AuthAction';
import { useDispatch } from "react-redux";

const FirstScreen = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutAction());
    }
  return (
    <View style={{flex : 1 , justifyContent : "center" , alignItems : "center"}}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout}/>
    </View>
  );
};

export default FirstScreen;