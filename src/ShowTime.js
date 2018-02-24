// @flow
import React from "react";
// $FlowFixMe
import { View, Text, Dimensions } from "react-native";
// $FlowFixMe
import PropTypes from "prop-types";
import { formatDate, formatTime } from "./utils";

/*
Auto scale font to fit using undocumented features.
https://medium.com/@vygaio/how-to-auto-adjust-text-font-size-to-fit-into-a-nodes-width-in-react-native-9f7d1d68305b
*/

type ShowTimeType = {
  date: Date,
  showSeconds: boolean,
  color: string
};

export const ShowTime = (props: ShowTimeType) => {
  const { width } = Dimensions.get("window");
  const time = formatTime(props.date, props.showSeconds);
  const fontSize = fontFit(time, width);
  const box = {
    height: fontSize * 0.85,
    justifyContent: "center"
  };
  const text = {
    color: props.color,
    fontSize: fontSize
  };

  return (
    <View style={box}>
      <Text style={text}>{time}</Text>
    </View>
  );
};

ShowTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired,
  showSeconds: PropTypes.bool.isRequired
};

type ShowDateType = {
  date: Date,
  color: string
};

export const ShowDate = (props: ShowDateType) => {
  const date = formatDate(props.date);
  const { width } = Dimensions.get("window");
  const fontSize = fontFit(date, width, 0.6);
  const box = {
    height: fontSize * 0.85,
    justifyContent: "center"
  };
  const text = {
    color: props.color,
    fontSize: fontSize
  };
  return (
    <View style={box}>
      <Text style={text}>{date}</Text>
    </View>
  );
};

ShowDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired
};

const fontFit = (str: string, width: number, fill = 1.0): number => {
  const fontScale = 1.8; // 1.9 is too big for iPhone 5s.
  return width / str.length * fontScale * fill;
};
