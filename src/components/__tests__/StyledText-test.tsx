import React from 'react';
import renderer from "react-test-renderer";
import { MonoText } from '../StyledText';

it('renders correctly', () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
  // const tree = renderer.create(<Text>Hello there!</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
