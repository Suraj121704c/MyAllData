import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import HomeScreen from "./Components/Home";
import { createAppContainer } from "react-navigation";
import AddScreen from "./Components/Add";
import EditScreen from "./Components/Edit";
import DetailScreen from "./Components/Details";

const AppNavigatore = createStackNavigator(
  {
    Home: HomeScreen,
    Add : AddScreen,
    Edit : EditScreen,
    Detail : DetailScreen
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigatore);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
