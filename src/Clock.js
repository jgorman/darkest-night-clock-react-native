// @flow
import React, { Component } from "react";
// $FlowFixMe
import { View, Text, TouchableHighlight, StatusBar } from "react-native";
// $FlowFixMe
import { connect } from "react-redux";

import { ShowTime, ShowDate } from "./ShowTime";
import { Controls } from "./Controls";
import { Colors } from "./Colors";
import { formatColor, scaleColor, viewWidth, fontFit } from "./utils";

import type { ClockState } from "./appstate";

import {
  MIN_BRIGHTNESS,
  MAX_BRIGHTNESS,
  DIMMER_RATIO,
  MESSAGE_DWELL,
  VERSION
} from "./appstate";

import {
  TOGGLE_SECONDS,
  TOGGLE_DATE,
  TOGGLE_CONTROLS,
  TOGGLE_COLORS,
  SET_DATE,
  SET_BRIGHTNESS,
  SET_COLOR,
  SHOW_MESSAGE,
  HIDE_MESSAGE
} from "./appstate";

type ClockType = {
  dispatch: Function,
  clock: ClockState
};

class Clock extends Component<ClockType> {
  timerID: IntervalID;

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
    StatusBar.setHidden(true);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
    this.props.dispatch({ type: SET_DATE, date: new Date() });
  };

  showMessage = message => {
    const clock = this.props.clock;
    const dispatch = this.props.dispatch;

    // Clear any pending timeout.
    if (clock.userMessageTimeoutID) {
      clearTimeout(clock.userMessageTimeoutID);
    }

    // Set a new timeout.
    const timeoutID = setTimeout(
      () => dispatch({ type: HIDE_MESSAGE }),
      MESSAGE_DWELL
    );

    // Activate the message.
    dispatch({
      type: SHOW_MESSAGE,
      userMessage: message,
      userMessageTimeoutID: timeoutID
    });
  };

  brighterClick = () => {
    const old_brightness = this.props.clock.brightness;
    let new_brightness = old_brightness / DIMMER_RATIO;
    if (new_brightness > MAX_BRIGHTNESS) new_brightness = MAX_BRIGHTNESS;
    if (new_brightness !== old_brightness) {
      this.props.dispatch({ type: SET_BRIGHTNESS, brightness: new_brightness });
    }
    let message = `${Math.round(new_brightness * 100)}%`;
    if (
      new_brightness === old_brightness &&
      this.props.clock.userMessageTimeoutID
    ) {
      message = `${message} Darkest Night Clock ${VERSION}`;
    }
    this.showMessage(message);
  };

  dimmerClick = () => {
    const old_brightness = this.props.clock.brightness;
    let new_brightness = old_brightness * DIMMER_RATIO;
    if (new_brightness < MIN_BRIGHTNESS) new_brightness = MIN_BRIGHTNESS;
    if (new_brightness !== old_brightness) {
      this.props.dispatch({ type: SET_BRIGHTNESS, brightness: new_brightness });
    }
    this.showMessage(`${Math.round(new_brightness * 100)}%`);
  };

  showControlsClick = () => {
    this.props.dispatch({ type: TOGGLE_CONTROLS });
  };

  showColorClick = () => {
    this.props.dispatch({ type: TOGGLE_COLORS });
  };

  setColorClick = color => {
    this.props.dispatch({ type: SET_COLOR, color: color });
  };

  showSecondsClick = () => {
    this.props.dispatch({ type: TOGGLE_SECONDS });
  };

  showDateClick = () => {
    this.props.dispatch({ type: TOGGLE_DATE });
  };

  showVersionPress = () => {
    this.showMessage(`Darkest Night Clock ${VERSION}`);
  };

  render() {
    const clock = this.props.clock;
    const color = formatColor(scaleColor(clock.color, clock.brightness));
    const width = viewWidth();
    const controlWidth = fontFit("Control Icons", width, 0.8);

    return (
      <View style={{ alignItems: "center" }}>
        <TouchableHighlight
          onPress={this.showControlsClick}
          onLongPress={this.showVersionPress}
        >
          <View style={{ alignItems: "center" }}>
            {clock.userMessage && clock.userMessageTimeoutID ? (
              <Text style={{ color: "white" }}>{clock.userMessage}</Text>
            ) : (
              undefined
            )}

            <ShowTime
              date={clock.date}
              showSeconds={clock.showSeconds}
              color={color}
            />

            {clock.showDate ? (
              <ShowDate date={clock.date} color={color} />
            ) : (
              undefined
            )}
          </View>
        </TouchableHighlight>

        {clock.showControls ? (
          <View style={{ alignItems: "center" }}>
            {clock.showColors ? (
              <Colors size={controlWidth} click={this.setColorClick} />
            ) : (
              <Controls size={controlWidth} clock={this} />
            )}
          </View>
        ) : (
          undefined
        )}
      </View>
    );
  }
}

function mapStateToProps(state: ClockState) {
  return { clock: state };
}

export default connect(mapStateToProps)(Clock);
