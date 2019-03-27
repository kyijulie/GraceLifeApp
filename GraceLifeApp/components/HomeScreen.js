import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "GraceLife"
  };
  render() {
    return (
      <View>
        <Text style={styles.container}>Hello from Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});
