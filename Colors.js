import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";

import { formatColor } from "./utils";

const Color = props => {
  const color = formatColor(props.color);
  return (
    <TouchableHighlight
      onPress={() => {
        props.click(props.color);
      }}
    >
      <View style={{ backgroundColor: color, width: 30, height: 30 }} />
    </TouchableHighlight>
  );
};

const Colors = props => {
  const click = props.click;
  return (
    <View style={{ flexDirection: "row" }}>
      <Color click={click} color={0xff0000} />
      <Color click={click} color={0x00ff00} />
      <Color click={click} color={0x0000ff} />
      <Color click={click} color={0xff00ff} />
      <Color click={click} color={0xffff00} />
      <Color click={click} color={0xffffff} />
    </View>
  );
};

export default Colors;
