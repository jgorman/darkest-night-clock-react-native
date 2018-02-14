import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ShowTime, ShowDate } from "./ShowTime";

const Clock = props => {
  const date = new Date();
  const color = "#00f";
  return (
    <View>
      <View>
        <Text style={{color: "red"}}>OOPS 26</Text>
        <ShowTime date={date} color={color} />
        <ShowDate date={date} showSeconds={true} color={color} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image source={require("./plus-circle.png")} />
        <Image source={require("./minus-circle.png")} />
        <Image source={require("./colors.png")} />
        <Image source={require("./seconds.png")} />
        <Image source={require("./show-date.png")} />
      </View>
    </View>
  );
};

export default Clock;
