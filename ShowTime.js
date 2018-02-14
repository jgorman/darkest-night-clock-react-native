import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

/*
Auto scale font to fit.
https://medium.com/@vygaio/how-to-auto-adjust-text-font-size-to-fit-into-a-nodes-width-in-react-native-9f7d1d68305b
*/

const ShowTime = props => {
  const time = formatTime(props.date, props.showSeconds);
  const { width } = Dimensions.get("window");
  const fontSize = fontFit(time, width);
  return (
    <View>
      <Text style={{ color: props.color }}>45</Text>
      <Text style={{ color: props.color, fontSize: fontSize }}>{time}</Text>
    </View>
  );
};

const ShowDate = props => {
  const date = formatDate(props.date);
  const { width } = Dimensions.get("window");
  const fontSize = fontFit(date, width, 0.6);
  return (
    <View>
      <Text style={{ color: props.color, fontSize: fontSize }}>{date}</Text>
    </View>
  );
};

const fontFit = (str, width, fill = 1.0) => {
  const fontScale = 1.9; // Font size / char width pixels.
  return width / str.length * fontScale * fill;
};

const zeropad = (num, len) => {
  const str = num.toString();
  if (str.length >= len) return str;
  return "0".repeat(len - str.length) + str;
};

const formatTime = (date, showSeconds) => {
  let str = zeropad(date.getHours(), 2);
  str += ":" + zeropad(date.getMinutes(), 2);
  if (showSeconds) {
    str += ":" + zeropad(date.getSeconds(), 2);
    // Eventually debug the shifting time. Perhaps a fixed font?
    // str += ":" + (((date.getSeconds() % 2) === 1) ? "11" : "00");
  }
  return str;
};

const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const day2 = zeropad(day, 2);
  const month2 = zeropad(month, 2);
  return `${year}-${month2}-${day2}`;
};

export { ShowTime, ShowDate };
