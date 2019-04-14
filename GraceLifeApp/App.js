import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import MediaScreen from "./components/MediaScreen";
import getConnected from "./components/HomeScreenComp/getConnected";
import sunday from "./components/HomeScreenComp/sunday";
import devotional from "./components/HomeScreenComp/devotional";
import contactUs from "./components/HomeScreenComp/contactUs";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  getConnected: {
    screen: getConnected
  },
  sunday: {
    screen: sunday
  },
  devotional: {
    screen: devotional
  },
  contactUs: {
    screen: contactUs
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
