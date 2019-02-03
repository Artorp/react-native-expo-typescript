import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { TouchButton } from "./TouchButton";

interface Props {
  count: number,
  onReset: () => void,
  onIncrement: () => void,
  onDecrement: () => void
}

export class Counter extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.margins, { fontSize: 20 }]}>Counter</Text>
        <Text style={[styles.margins, { fontSize: 12, color: "#aaa" }]}>A simple counter example</Text>
        <View style={[styles.margins, { flexDirection: "row" }]}>
          <TouchButton buttonStyle={[styles.margins, { minWidth: 50, minHeight: 50 }]}
                       text={"+"}
                       onPress={this.props.onIncrement}/>
          <Text style={[styles.margins, { textAlignVertical: "center", fontSize: 22 }]}>{this.props.count}</Text>
          <TouchButton buttonStyle={[styles.margins, { minWidth: 50, minHeight: 50 }]}
                       text={"-"}
                       onPress={this.props.onDecrement}/>
        </View>
        <TouchButton buttonStyle={[styles.margins, { minWidth: 200, minHeight: 50 }]}
                     text={"Reset"}
                     onPress={this.props.onReset}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  margins: {
    margin: 5
  }
});
