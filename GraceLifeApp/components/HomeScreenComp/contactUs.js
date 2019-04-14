import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import contactUsPic from "/Users/julieim/Desktop/Projects/GraceLifeApp/GraceLifeApp/pics/contactus.png";
import MapView from "react-native-maps";

export default class contactUs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 34.258414,
            longitude: -118.503887,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05
          }}
        />
        <ScrollView>
          <Text>contact us</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "stretch",
    height: 200,
    marginBottom: 3,
    backgroundColor: "skyblue"
  },
  map: {
    position: "absolute",
    height: 200,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
