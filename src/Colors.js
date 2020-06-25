import React from "react"
import { View, TouchableHighlight } from "react-native"

import { formatColor } from "./utils"

import {
  COLOR_RED,
  COLOR_GREEN,
  COLOR_BLUE,
  COLOR_YELLOW,
  COLOR_WHITE,
} from "./appstate"

const Color = (props) => {
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

export const Colors = (props) => {
  const size = props.size
  const click = props.click
  return (
    <View style={{ flexDirection: "row" }}>
      <Color size={size} click={click} color={COLOR_RED} />
      <Color size={size} click={click} color={COLOR_GREEN} />
      <Color size={size} click={click} color={COLOR_BLUE} />
      <Color size={size} click={click} color={COLOR_YELLOW} />
      <Color size={size} click={click} color={COLOR_WHITE} />
    </View>
  )
}
