import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ShowTime, ShowDate } from "./ShowTime";

const img = "https://shambhala.org/wp-content/themes/shambhala_sandbox/images/Shambhala-Intl-Web-Header.jpg";

const Clock = props => {
  return (
    <View>
      <View>
        <Text>OOPS 13</Text>
        <ShowTime />
        <ShowDate />
      </View>

      <View>
        <Text>Nice</Text>
    <Image source={{uri: img}} style={{width: 100, height: 100}} />
    <Image source={require("./colors.png")} />
    <Image source={require("./seconds.png")} />
    </View>
    </View>
  );
};

export default Clock;
