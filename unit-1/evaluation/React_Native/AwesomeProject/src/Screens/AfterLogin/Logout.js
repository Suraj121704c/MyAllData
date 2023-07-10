import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../Redux/Actions/AuthAction';

export const Logout = ({navigation}) => {
  const dispatch = useDispatch();

  const LogoutJi = () => {
    dispatch(logoutAction());
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Logout From Here</Text>
      <Button title="Logout" onPress={LogoutJi} />
    </View>
  );
};
