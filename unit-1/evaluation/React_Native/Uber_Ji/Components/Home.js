import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  function server() {
    axios
      .get("https://backend-mock-5.onrender.com/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

  useEffect(() => {
    server();
  }, []);

  return (
    <View>
      <Button title="Add Item" onPress={() => navigation.navigate("Add")} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate("Detail", { item })}
            />
            <Button
              title="Edit"
              onPress={() => navigation.navigate("Edit", { item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
