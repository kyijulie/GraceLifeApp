import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const SettingsStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen
  }
});

const App = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Profile: { screen: SettingsStack }
});

export default createAppContainer(App);
