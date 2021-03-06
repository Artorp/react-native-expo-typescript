import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>
}

export class MonoText extends React.Component<Props> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
