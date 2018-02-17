import React from "react";
import { View, Text, Dimensions } from "react-native";
import { zeropad } from "./utils";

/*
Auto scale font to fit using undocumented features.
https://medium.com/@vygaio/how-to-auto-adjust-text-font-size-to-fit-into-a-nodes-width-in-react-native-9f7d1d68305b
*/

const ShowTime = props => {
  const time = formatTime(props.date, props.showSeconds);
  const { width } = Dimensions.get("window");
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

const ShowDate = props => {
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

const fontFit = (str, width, fill = 1.0) => {
  const fontScale = 1.8; // Font size / char width pixels.
  return width / str.length * fontScale * fill;
};

const formatTime = (date, showSeconds) => {
  let str = zeropad(date.getHours(), 2);
  str += ":" + zeropad(date.getMinutes(), 2);
  if (showSeconds) {
    str += ":" + zeropad(date.getSeconds(), 2);
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
