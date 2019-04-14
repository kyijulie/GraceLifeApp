import React from "react";
import Navigate1 from "../pics/dog1.jpg";
import Navigate2 from "../pics/dog2.jpeg";
import Navigate3 from "../pics/dog3.jpg";
import Navigate4 from "../pics/dog4.jpg";
import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from "react-native";

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("getConnected")}
            underlayColor="white"
          >
            <ImageBackground style={styles.button} source={Navigate1}>
              <Text style={styles.text}>Get Connected</Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("sunday")}
            underlayColor="white"
          >
            <ImageBackground style={styles.button} source={Navigate2}>
              <Text style={styles.text}>Sunday</Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("devotional")}
            underlayColor="white"
          >
            <ImageBackground style={styles.button} source={Navigate3}>
              <Text style={styles.text}>GL Devotional</Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("contactUs")}
            underlayColor="white"
          >
            <ImageBackground style={styles.button} source={Navigate4}>
              <Text style={styles.text}>Contact Us</Text>
            </ImageBackground>
          </TouchableHighlight>
        </ScrollView>
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
    alignSelf: "stretch",
    height: 200,
    marginBottom: 3,
    backgroundColor: "skyblue"
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 30
  }
});
