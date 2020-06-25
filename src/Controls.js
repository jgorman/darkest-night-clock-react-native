import React from "react"
import { View, Image, TouchableHighlight } from "react-native"

export const Controls = (props) => {
  const size = props.size
  const actions = props.actions

  const control_style = {
    height: size,
    width: size,
    margin: 5,
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableHighlight
        onPressIn={actions.dimmerPress}
        onPressOut={actions.endPress}
      >
        <View>
          <Image
            style={control_style}
            source={require("../assets/minus-circle.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPressIn={actions.brighterPress}
        onPressOut={actions.endPress}
      >
        <View>
          <Image
            style={control_style}
            source={require("../assets/plus-circle.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={actions.showColorClick}>
        <View>
          <Image
            style={control_style}
            source={require("../assets/colors.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={actions.showSecondsClick}>
        <View>
          <Image
            style={control_style}
            source={require("../assets/seconds.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={actions.showDateClick}>
        <View>
          <Image
            style={control_style}
            source={require("../assets/show-date.png")}
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}
