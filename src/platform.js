/* Platform specific functions. */

import { AsyncStorage, Dimensions, StatusBar } from "react-native"
import { activateKeepAwake } from "expo-keep-awake"

import { defaultState, mergeOldState, SETTINGS_KEY } from "./appstate"

export const isNative = true

export const bootState = () => ({})

export const bootClock = (dispatch) => {
  activateKeepAwake()
  StatusBar.setHidden(true)

  getOldState((oldState) => {
    const initialState = mergeOldState(defaultState(), oldState)
    initialState.date = new Date()
    dispatch({ type: "set_state", state: initialState })
  })
}

export const keepState = (state) => saveState(mergeOldState({}, state))

// Save state in browser storage.
const saveState = (state) => {
  const settings = JSON.stringify(state)
  AsyncStorage.setItem(SETTINGS_KEY, settings)
    .then(() => {})
    .catch((err) => {})
}

// Get state from browser storage.
const getOldState = (success) => {
  AsyncStorage.getItem(SETTINGS_KEY)
    .then((response) => JSON.parse(response))
    .then((settings) => {
      success(settings)
    })
    .catch((err) => {}) // Discard missing or corrupted old state.
}

// Viewport dimensions.
export const getViewPort = () => {
  const window = Dimensions.get("window")
  return [window.width, window.height]
}
