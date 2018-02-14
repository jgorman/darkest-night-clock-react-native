import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
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

    return (
      <View>
        <View>
          <Text style={{ color: "red" }}>OOPS 51</Text>
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

        <View style={{flexDirection: "column"}}>
        <View>
          {clock.showColors ? <Colors click={this.setColorClick} /> : undefined}
        </View>
        <View style={{ flexDirection: "row" }}>
          {clock.showColors ? <Colors click={this.setColorClick} /> : undefined}
          <TouchableHighlight onPress={this.brighterClick}>
            <Image source={require("./plus-circle.png")} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.dimmerClick}>
            <Image source={require("./minus-circle.png")} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.showColorClick}>
            <Image source={require("./colors.png")} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.showSecondsClick}>
            <Image source={require("./seconds.png")} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.showDateClick}>
            <Image source={require("./show-date.png")} />
          </TouchableHighlight>
        </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { clock: state };
}

export default connect(mapStateToProps)(Clock);
