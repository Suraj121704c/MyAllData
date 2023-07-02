import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default DetailScreen;