import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { formatColor, scaleColor } from "./utils";

import { ShowTime, ShowDate } from "./ShowTime";

class Clock extends Component {
  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
    this.props.dispatch({ type: "SET_DATE", date: new Date() });
    // saveState(this.props.clock);
  };

  render() {
    const clock = this.props.clock;
    const color = formatColor(scaleColor(clock.color, clock.brightness));

    return (
      <View>
        <View>
          <Text style={{ color: "red" }}>OOPS 44</Text>
          <ShowTime
            date={clock.date}
            showSeconds={clock.showSeconds}
            color={color}
          />
          <ShowDate date={clock.date} color={color} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image source={require("./plus-circle.png")} />
          <Image source={require("./minus-circle.png")} />
          <Image source={require("./colors.png")} />
          <Image source={require("./seconds.png")} />
          <Image source={require("./show-date.png")} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { clock: state };
}

export default connect(mapStateToProps)(Clock);
