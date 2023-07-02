import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

 

  return (
    <View>
      <Button title="Add Item" onPress={() => navigation.navigate("Add")} />
      
      
    </View>
  );
};

export default HomeScreen;
