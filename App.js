import React from "react";
import { StyleSheet, View } from "react-native";
import { KeepAwake } from "expo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./src/appstate";
import { getOldState } from "./src/platform";
import Clock from "./src/Clock";

const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount = () => {
    getOldState(oldState => {
      store.dispatch({ type: "REDUX_STORAGE_LOAD", oldState: oldState });
    });

    store.subscribe(() => {
      const state = store.getState();
      if (state.dirty) {
        store.dispatch({ type: "REDUX_STORAGE_SAVE" });
      }
    });
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
