import React from 'react';
import {View, Text , Button } from 'react-native';

export default function OnHome({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>settings</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
