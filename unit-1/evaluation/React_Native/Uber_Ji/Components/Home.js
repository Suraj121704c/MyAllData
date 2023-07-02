import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  function server() {
    axios.get('https://backend-mock-5.onrender.com/products')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  }

  useEffect(() => {
    server();
  }, []);

  return (
    <View>
      <Button title="Add Item" onPress={() => navigation.navigate("Add")} />
      <Text>Aur Nunu</Text>
      <Text>Aur Nunu</Text>
    </View>
  );
};

export default HomeScreen;
