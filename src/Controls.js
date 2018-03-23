// @flow
import React from "react";
// $FlowFixMe
import { View, Image, TouchableHighlight } from "react-native";

type ControlsType = {
  size: number,
  clock: Object
};

export const Controls = (props: ControlsType) => {
  const size = props.size;
  const clock = props.clock;

  const control = {
    height: size,
    width: size,
    margin: 5
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableHighlight
        onPressIn={clock.dimmerStart}
        onPressOut={clock.brightnessEnd}
        >
        <View>
          <Image
            style={control}
            source={require("../assets/minus-circle.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPressIn={clock.brighterStart}
        onPressOut={clock.brightnessEnd}
        >
        <View>
          <Image
            style={control}
            source={require("../assets/plus-circle.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={clock.showColorClick}>
        <View>
          <Image style={control} source={require("../assets/colors.png")} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={clock.showSecondsClick}>
        <View>
          <Image style={control} source={require("../assets/seconds.png")} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={clock.showDateClick}>
        <View>
          <Image style={control} source={require("../assets/show-date.png")} />
        </View>
      </TouchableHighlight>
    </View>
  );
};