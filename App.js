import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { KeepAwake } from "expo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./src/appstate";
import { getOldState } from "./src/platform";
import Clock from "./src/Clock";
import { REDUX_STORAGE_LOAD, REDUX_STORAGE_SAVE } from "./src/appstate";

const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount = () => {
    getOldState(oldState => {
      store.dispatch({ type: REDUX_STORAGE_LOAD, oldState: oldState });
    });

    // Watch to see when we need to save the ClockState.
    store.subscribe(() => {
      const state = store.getState();
      if (state.unsavedState) {
        store.dispatch({ type: REDUX_STORAGE_SAVE });
      }
    });

    StatusBar.setHidden(true);
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <KeepAwake />
          <Clock />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  }
});
