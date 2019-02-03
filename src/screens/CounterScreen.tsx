import React, { Component } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Counter } from "../components/Counter";
import { ConnectedCounterContainer } from "../containers/CounterContainer";

export class CounterScreen extends Component {
  static navigationOptions = {
    title: "Counter",
  };

  render() {
    return (
      <View style={styles.container}>
        <ConnectedCounterContainer examplePropFromParent={"example injected value"} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  }
});
