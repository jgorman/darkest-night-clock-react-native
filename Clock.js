import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

import { ShowTime, ShowDate } from "./ShowTime";
import Colors from "./Colors";
import { formatColor, scaleColor } from "./utils";

class Clock extends Component {
  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
    this.props.dispatch({ type: "SET_DATE", date: new Date() });
    // jj saveState(this.props.clock);
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
    const button = {
      borderRightWidth: 5,
      borderLeftWidth: 5
    };
    // svgexport colors.svg colors.png 40:40

    return (
      <View style={{ alignItems: "center" }}>
        <TouchableHighlight onPress={this.showControlsClick}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "red" }}>OOPS 74</Text>

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
                <View style={button}>
                  <Image source={require("./plus-circle.png")} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.dimmerClick}>
                <View style={button}>
                  <Image source={require("./minus-circle.png")} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showColorClick}>
                <View style={button}>
                  <Image source={require("./colors.png")} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showSecondsClick}>
                <View style={button}>
                  <Image source={require("./seconds.png")} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showDateClick}>
                <View style={button}>
                  <Image source={require("./show-date.png")} />
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

function mapStateToProps(state) {
  return { clock: state };
}

export default connect(mapStateToProps)(Clock);
