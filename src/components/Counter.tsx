import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { TouchButton } from "./TouchButton";

interface Props {

}

interface State {
  count: number
}

export class Counter extends Component<Props, State> {
  state: State = { count: 0 };

  private onReset = () => this.setState({ count: 0 });
  private onIncrement = () => this.setState({ count: this.state.count + 1 });
  private onDecrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.margins, { fontSize: 20 }]}>Counter</Text>
        <Text style={[styles.margins, { fontSize: 12, color: "#aaa" }]}>A simple counter example</Text>
        <View style={[styles.margins, { flexDirection: "row" }]}>
          <TouchButton buttonStyle={[styles.margins, { minWidth: 50, minHeight: 50 }]}
                       text={"+"}
                       onPress={this.onIncrement}/>
          <Text style={[styles.margins, { textAlignVertical: "center", fontSize: 22 }]}>{this.state.count}</Text>
          <TouchButton buttonStyle={[styles.margins, { minWidth: 50, minHeight: 50 }]}
                       text={"-"}
                       onPress={this.onDecrement}/>
        </View>
        <TouchButton buttonStyle={[styles.margins, { minWidth: 200, minHeight: 50 }]}
                     text={"Reset"}
                     onPress={this.onReset}/>
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
