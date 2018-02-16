import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./appstate";
import { getOldState } from "./platform";
import Clock from "./Clock";

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
