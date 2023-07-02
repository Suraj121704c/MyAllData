import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const EditScreen = ({ navigation }) => {
  const item = navigation.getParam('item', {});
  const [title, setTitle] = useState(item.title);

  const handleUpdateItem = async () => {
    try {
      await axios.put(`https://backend-mock-5.onrender.com/products/${item.id}`, { title });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter item title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Update" onPress={handleUpdateItem} />
    </View>
  );
};

export default EditScreen;