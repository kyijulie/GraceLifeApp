import React from "react";
import reactNavigation from "react-navigation";
import { Text, View, StyleSheet, Button } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Grace Life",
    headerRight: (
      <Button onPress={() => alert("hello")} title="Info" color="#fff" />
    )
  };
  render() {
    return (
      <View>
        <Text style={styles.container}>Hello from Home Screen</Text>
        <Button
          style={styles.button}
          title="Go Somewhere"
          onPress={() => this.props.navigation.navigate("example")}
        />
        <Button
          style={styles.button}
          title="Go Somewhere"
          onPress={() => alert("Go Somewhere")}
        />
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
  },
  button: {
    backgroundColor: "#000"
  }
});
