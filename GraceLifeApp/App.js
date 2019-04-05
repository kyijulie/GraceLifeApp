import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import MediaScreen from "./components/MediaScreen";
import example from "./components/HomeScreenComp/example";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  example: {
    screen: example
  }
});
const MediaStack = createStackNavigator({
  Media: {
    screen: MediaScreen
  }
});
const SettingsStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen
  }
});

const App = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Media: { screen: MediaStack },
  Profile: { screen: SettingsStack }
});

export default createAppContainer(App);
