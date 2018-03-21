// @flow
import React from "react";
// $FlowFixMe
import { View, TouchableHighlight } from "react-native";
// $FlowFixMe
import PropTypes from "prop-types";
import { formatColor } from "./utils";

type ColorType = {
  color: number,
  size: string,
  click: Function
};

const Color = (props: ColorType) => {
  const color = formatColor(props.color);
  const size = props.size;

  const paintChip = {
    width: size,
    height: size,
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
  size: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
};

type ColorsType = {
  size: number,
  click: Function
};

export const Colors = (props: ColorsType) => {
  const size = props.size;
  const click = props.click;
  return (
    <View style={{ flexDirection: "row" }}>
      <Color size={size} click={click} color={0xff0000} />
      <Color size={size} click={click} color={0x00bb00} />
      <Color size={size} click={click} color={0x6666ff} />
      <Color size={size} click={click} color={0xffd700} />
      <Color size={size} click={click} color={0xffffff} />
    </View>
  );
};

Colors.propTypes = {
  size: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
};
