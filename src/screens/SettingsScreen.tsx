import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { NavigationInjectedProps } from "react-navigation";

export interface OwnProps {}

type Props = OwnProps & NavigationInjectedProps;

export class SettingsScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
