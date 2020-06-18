// @flow
import React from "react"
// $FlowFixMe
import { View, TouchableHighlight } from "react-native"
// $FlowFixMe
import PropTypes from "prop-types"
import { formatColor } from "./utils"

type ColorType = {
  color: number,
  size: number,
  click: Function,
}

const Color = (props: ColorType) => {
  const color = formatColor(props.color)
  const size = props.size

  // Color dots should match control icon visible circle size: 22/24 of image.
  const dotSize = (size * 22) / 24
  const extraMargin = (size - dotSize) / 2

  const paintChip = {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize,
    margin: 5 + extraMargin,
    backgroundColor: color,
  }

  return (
    <TouchableHighlight onPress={() => props.click(props.color)}>
      <View style={paintChip} />
    </TouchableHighlight>
  )
}

Color.propTypes = {
  color: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
}

type ColorsType = {
  size: number,
  click: Function,
}

export const Colors = (props: ColorsType) => {
  const size = props.size
  const click = props.click
  return (
    <View style={{ flexDirection: "row" }}>
      <Color size={size} click={click} color={0xff0000} />
      <Color size={size} click={click} color={0x00bb00} />
      <Color size={size} click={click} color={0x6666ff} />
      <Color size={size} click={click} color={0xffd700} />
      <Color size={size} click={click} color={0xffffff} />
    </View>
  )
}

Colors.propTypes = {
  size: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
}
