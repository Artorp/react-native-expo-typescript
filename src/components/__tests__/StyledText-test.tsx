import {Text} from "react-native";
import * as React from 'react';
import * as renderer from "react-test-renderer";
// import { MonoText } from '../StyledText';

it('renders correctly', () => {
  // const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
  const tree = renderer.create(<Text>Hello there!</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
