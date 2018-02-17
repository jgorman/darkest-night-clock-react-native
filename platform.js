/* React Native utilities. */

import { AsyncStorage } from "react-native";

const settingsKey = "clockSettings";

// Save state in browser storage.
export const saveState = state => {
  const settings = JSON.stringify(state);
  AsyncStorage.setItem(settingsKey, settings)
    .then(() => {})
    .catch(err => {});
};

// Get state from browser storage.
export const getOldState = success => {
  AsyncStorage.getItem(settingsKey)
    .then(response => JSON.parse(response))
    .then(settings => {
      success(settings);
    })
    .catch(err => {});
};
