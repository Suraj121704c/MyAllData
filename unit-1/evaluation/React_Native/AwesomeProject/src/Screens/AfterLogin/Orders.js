import React from 'react';
import {View , Text, Button} from 'react-native';

export const Orders = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Orders</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};