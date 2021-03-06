import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { ConnectedTextInputContainer } from "../containers/TextInputContainer";
import { NavigationInjectedProps } from "react-navigation";

export interface OwnProps {}

type Props = OwnProps & NavigationInjectedProps;

export class TextInputScreen extends Component<Props> {
  static navigationOptions = {
    title: "Text Input Example",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Text input example</Text>
        <ConnectedTextInputContainer />
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
