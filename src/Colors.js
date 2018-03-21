// @flow
import React from "react";
// $FlowFixMe
import { View, TouchableHighlight } from "react-native";
// $FlowFixMe
import PropTypes from "prop-types";
import { formatColor } from "./utils";

type ColorType = {
  color: number,
  click: Function
};

const Color = (props: ColorType) => {
  const color = formatColor(props.color);

  const paintChip = {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: color
  };

  return (
    <TouchableHighlight onPress={() => props.click(props.color)}>
      <View style={paintChip} />
    </TouchableHighlight>
  );
};

Color.propTypes = {
  color: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
};

export const Colors = (props: { click: Function }) => {
  const click = props.click;
  return (
    <View style={{ flexDirection: "row" }}>
      <Color click={click} color={0xff0000} />
      <Color click={click} color={0x00bb00} />
      <Color click={click} color={0x6666ff} />
      <Color click={click} color={0xffd700} />
      <Color click={click} color={0xffffff} />
    </View>
  );
};

Colors.propTypes = {
  click: PropTypes.func.isRequired
};
