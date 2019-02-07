import React, { Component } from "react";
import { ConnectedTapContainer } from "../containers/TapContainer";
import { NavigationInjectedProps } from "react-navigation";

export interface OwnProps {}

type Props = OwnProps & NavigationInjectedProps;

export class TapScreen extends Component<Props> {
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
