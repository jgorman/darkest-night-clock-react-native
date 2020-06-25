/* Render Native Clock. */

import React from "react"
import { View, Text, TouchableHighlight, Platform } from "react-native"

import { geometry } from "./utils"
import { Controls } from "./Controls"
import { Colors } from "./Colors"
import { getViewPort } from "./platform"

export const ClockRender = (state, actions) => {
  const viewPort = getViewPort()
  const geo = geometry(viewPort, state)

  const fontFamily = Platform.OS === "ios" ? "HelveticaNeue-Light" : "normal"

  const viewport_style = {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  }

  const message_style = {
    color: "white",
    fontSize: geo.message_h,
    height: geo.message_h * 1.5,
  }

  const time_box_style = {
    height: geo.time_h,
    justifyContent: "center",
  }
  const time_text_style = {
    color: geo.color,
    fontFamily,
    fontSize: geo.time_h,
    fontWeight: "100",
  }

  const date_box_style = {
    height: geo.date_h,
    justifyContent: "center",
  }
  const date_text_style = {
    color: geo.color,
    fontFamily,
    fontSize: geo.date_h,
    fontWeight: "100",
  }

  return (
    <View style={viewport_style}>
      <View
        style={{ alignItems: "center" }}
        onStartShouldSetResponder={() => true}
        onResponderTerminationRequest={() => true}
        onResponderGrant={actions.brightnessStart}
        onResponderMove={actions.brightnessMove}
        onResponderRelease={actions.brightnessEnd}
        onResponderTerminate={actions.brightnessEnd}
      >
        <View style={time_box_style}>
          <Text style={time_text_style}>{geo.time_s}</Text>
        </View>

        <Text style={message_style}>{state.message}</Text>

        {state.showDate ? (
          <View style={date_box_style}>
            <Text style={date_text_style}>{geo.date_s}</Text>
          </View>
        ) : undefined}
      </View>

      {state.showControls ? (
        <View style={{ alignItems: "center" }}>
          {state.showColors ? (
            <Colors size={geo.control_h} click={actions.setColorClick} />
          ) : (
            <Controls size={geo.control_h} actions={actions} />
          )}
        </View>
      ) : undefined}
    </View>
  )
}
