import React from 'react';
import App from '../App';
import { createRenderer, ShallowRenderer } from 'react-test-renderer/shallow';
import NavigationTestUtils from "react-navigation/NavigationTestUtils";

describe('App snapshot', () => {
  jest.useFakeTimers();
  let shallow: ShallowRenderer;
  beforeEach(() => {
    shallow = createRenderer();
    NavigationTestUtils.resetInternalState();
  });

  it('renders the loading screen', async () => {
    shallow.render(<App />);
    const result = shallow.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders the root without loading screen', async () => {
    shallow.render(<App skipLoadingScreen />);
    const result = shallow.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
