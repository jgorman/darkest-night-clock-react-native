// @flow
import React, { Component } from "react";
// $FlowFixMe
import { View, Image, TouchableHighlight } from "react-native";
// $FlowFixMe
import { StatusBar } from "react-native";
// $FlowFixMe
import { connect } from "react-redux";

import { ShowTime, ShowDate } from "./ShowTime";
import Colors from "./Colors";
import { formatColor, scaleColor } from "./utils";
import type { ClockState } from "./utils";

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
    this.props.dispatch({ type: "SET_DATE", date: new Date() });
  };

  brighterClick = () => {
    this.props.dispatch({ type: "BRIGHTER" });
  };

  dimmerClick = () => {
    this.props.dispatch({ type: "DIMMER" });
  };

  showControlsClick = () => {
    this.props.dispatch({ type: "TOGGLE_CONTROLS" });
  };

  showColorClick = () => {
    this.props.dispatch({ type: "TOGGLE_COLORS" });
  };

  setColorClick = color => {
    this.props.dispatch({ type: "SET_COLOR", color: color });
  };

  showSecondsClick = () => {
    this.props.dispatch({ type: "TOGGLE_SECONDS" });
  };

  showDateClick = () => {
    this.props.dispatch({ type: "TOGGLE_DATE" });
  };

  render() {
    const clock = this.props.clock;
    const color = formatColor(scaleColor(clock.color, clock.brightness));
    const image = {
      height: 60,
      width: 60,
      margin: 5
    };

    return (
      <View style={{ alignItems: "center" }}>
        <TouchableHighlight onPress={this.showControlsClick}>
          <View style={{ alignItems: "center" }}>
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
              <Colors click={this.setColorClick} />
            ) : (
              undefined
            )}

            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight onPress={this.brighterClick}>
                <View>
                  <Image
                    style={image}
                    source={require("../assets/plus-circle.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.dimmerClick}>
                <View>
                  <Image
                    style={image}
                    source={require("../assets/minus-circle.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showColorClick}>
                <View>
                  <Image
                    style={image}
                    source={require("../assets/colors.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showSecondsClick}>
                <View>
                  <Image
                    style={image}
                    source={require("../assets/seconds.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showDateClick}>
                <View>
                  <Image
                    style={image}
                    source={require("../assets/show-date.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
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
