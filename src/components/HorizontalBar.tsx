import React, { PureComponent } from "react";
import {
  View,
  StyleSheet, StyleProp, ViewStyle
} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>
}

export class HorizontalBar extends PureComponent<Props> {
  render() {
    return (
      <View style={[styles.horizBar, this.props.style]} />
    );
  }
}

const styles = StyleSheet.create({
  horizBar: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
