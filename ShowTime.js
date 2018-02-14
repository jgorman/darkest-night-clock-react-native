import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShowTime = props => {
  return (
    <View>
      <Text style={{color: props.color}}>18</Text>
      <Text style={{color: props.color}}>{formatTime(new Date(), true)}</Text>
    </View>
  );
};

const ShowDate = props => {
  return (
    <View>
      <Text style={{color: "red"}}>{formatDate(new Date())}</Text>
    </View>
  );
};

const zeropad = (num, len) => {
  const str = num.toString();
  return str.padStart(len, "0");
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

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

export { ShowTime, ShowDate };
