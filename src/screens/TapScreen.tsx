import React, { Component } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { ConnectedTapContainer } from "../containers/TapContainer";

export class TapScreen extends Component {
  static navigationOptions = {
    title: "Click it!",
  };

  render() {
    return (
      <ConnectedTapContainer
        colorFirst={"#fff"}
        colorWait={"#ffd05c"}
        colorDone={"#46ff12"}
      />
    );
  }
}
