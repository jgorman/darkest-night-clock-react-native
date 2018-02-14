import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ShowTime, ShowDate } from "./ShowTime";

const Clock = props => {
  const clock = {
    date: new Date(),
    color: "#ff0000",
    showSeconds: false
  };
  return (
    <View>
      <View>
        <Text style={{ color: "red" }}>OOPS 30</Text>
        <ShowTime
          date={clock.date}
          showSeconds={clock.showSeconds}
          color={clock.color}
        />
        <ShowDate date={clock.date} color={clock.color} />
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
