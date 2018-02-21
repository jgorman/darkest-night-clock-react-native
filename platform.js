// @flow
/* React Native utilities. */

// $FlowFixMe
import { AsyncStorage } from "react-native";
import type { ClockState } from "./utils";

const settingsKey = "clockSettings";

// Save state in browser storage.
export const saveState = (state: ClockState) => {
  const settings = JSON.stringify(state);
  AsyncStorage.setItem(settingsKey, settings)
    .then(() => {})
    .catch(err => {});
};

// Get state from browser storage.
export const getOldState = (success: Function) => {
  AsyncStorage.getItem(settingsKey)
    .then(response => JSON.parse(response))
    .then(settings => {
      success(settings);
    })
    .catch(err => {});
};
