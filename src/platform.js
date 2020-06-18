// @flow
/* React Native utilities. */

// $FlowFixMe
import { AsyncStorage, Dimensions } from "react-native"

import type { ClockState } from "./appstate"
const SETTINGS_KEY = "clockSettings" // Avoid an import loop.

export const isNative = true

// Save state in browser storage.
export const saveState = (state: ClockState) => {
  const settings = JSON.stringify(state)
  AsyncStorage.setItem(SETTINGS_KEY, settings)
    .then(() => {})
    .catch((err) => {})
}

// Get state from browser storage.
export const getOldState = (success: Function) => {
  AsyncStorage.getItem(SETTINGS_KEY)
    .then((response) => JSON.parse(response))
    .then((settings) => {
      success(settings)
    })
    .catch((err) => {}) // Discard missing or corrupted old state.
}

// Viewport dimensions.
export const viewWidth = () => Dimensions.get("window").width
export const viewHeight = () => Dimensions.get("window").height
