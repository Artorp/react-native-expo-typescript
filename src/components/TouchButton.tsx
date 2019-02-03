import React, { PureComponent } from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight, GestureResponderEvent, StyleProp, ViewStyle, TextStyle
} from "react-native";

interface Props {
  onPress?: (event: GestureResponderEvent) => void | undefined,
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  text?: string
}

export class TouchButton extends PureComponent<Props> {
  render() {
    return (
      <TouchableHighlight
        style={[styles.touchable, this.props.buttonStyle]}
        onPress={this.props.onPress || (() => {})}>
        <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    padding: 10
  },
  text: {
    color: "#fff"
  }
});
