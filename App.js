import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Clock from "./Clock";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Version 04</Text>
        <Clock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "red"
  }
});
