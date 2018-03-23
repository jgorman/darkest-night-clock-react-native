// @flow
/* React Native utilities. */

// $FlowFixMe
import { AsyncStorage, Dimensions } from "react-native";

import type { ClockState } from "./appstate";
import { SETTINGS_KEY } from "./appstate";

// Save state in browser storage.
export const saveState = (state: ClockState) => {
  const settings = JSON.stringify(state);
  AsyncStorage.setItem(SETTINGS_KEY, settings)
    .then(() => {})
    .catch(err => {});
};

// Get state from browser storage.
export const getOldState = (success: Function) => {
  AsyncStorage.getItem(SETTINGS_KEY)
    .then(response => JSON.parse(response))
    .then(settings => {
      success(settings);
    })
    .catch(err => {}); // Discard missing or corrupted old state.
};

export const viewWidth = () => Dimensions.get("window").width;
