import React from 'react';
import {View , Text, Button} from 'react-native';

export const Products = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Products</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};