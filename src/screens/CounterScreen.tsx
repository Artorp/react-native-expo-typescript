import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View, Button,
} from "react-native";
import { TouchButton } from "../components/TouchButton";
import { Counter } from "../components/Counter";

export class CounterScreen extends Component {
  static navigationOptions = {
    title: "Counter",
  };

  render() {
    return (
      <View style={styles.container}>
        <Counter/>
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
