import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class example extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Hello from Example</Text>
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
