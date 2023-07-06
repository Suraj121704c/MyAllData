import React from 'react';
import {View , Text, Button} from 'react-native';

export const Logout = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Logout From Here</Text>
      <Button title="Logout" onPress={() => navigation.goBack()} />
    </View>
  );
};