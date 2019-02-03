import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Counter } from "../components/Counter";

interface State {
  count: number
}

export class CounterContainer extends Component<{}, State> {
  state: State = { count: 0 };

  private handleReset = () => this.setState({ count: 0 });
  private handleIncrement = () => this.setState({ count: this.state.count + 1 });
  private handleDecrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <Counter count={this.state.count}
               onReset={this.handleReset}
               onIncrement={this.handleIncrement}
               onDecrement={this.handleDecrement}/>
    );
  }
}
