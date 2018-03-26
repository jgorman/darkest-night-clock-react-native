// @flow
import React from "react";
// $FlowFixMe
import { View, Image, TouchableHighlight } from "react-native";

type ControlsType = {
  size: number,
  Clock: Object
};

export const Controls = (props: ControlsType) => {
  const size = props.size;
  const Clock = props.Clock;

  const control = {
    height: size,
    width: size,
    margin: 5
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableHighlight
        onPressIn={Clock.dimmerPress}
        onPressOut={Clock.endPress}
        >
        <View>
          <Image
            style={control}
            source={require("../assets/minus-circle.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPressIn={Clock.brighterPress}
        onPressOut={Clock.endPress}
        >
        <View>
          <Image
            style={control}
            source={require("../assets/plus-circle.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={Clock.showColorClick}>
        <View>
          <Image style={control} source={require("../assets/colors.png")} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={Clock.showSecondsClick}>
        <View>
          <Image style={control} source={require("../assets/seconds.png")} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={Clock.showDateClick}>
        <View>
          <Image style={control} source={require("../assets/show-date.png")} />
        </View>
      </TouchableHighlight>
    </View>
  );
};
