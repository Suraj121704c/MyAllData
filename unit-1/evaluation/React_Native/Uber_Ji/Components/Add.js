import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const handleAddItem = async () => {
    try {
      await axios.post('https://backend-mock-5.onrender.com/products', { title });
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
      <Button title="Add" onPress={handleAddItem} />
    </View>
  );
};

export default AddScreen;