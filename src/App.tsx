import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import { AppNavigator } from './navigation/AppNavigator';

import { Provider } from "react-redux";
import {configureStore} from "./configureStore";

const store = configureStore(false);

interface Props {
  skipLoadingScreen?: boolean;
}

interface State {
  isLoadingComplete: boolean;
}

export default class App extends React.Component<Props, State> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            <AppNavigator/>
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    // since missing typeinfo about Icon.Ionicons.font, check before extracting
    let ioniconsFonts: {[key: string]: any} = {};
    const ionicons: any = Ionicons;
    if (ionicons.font != null && typeof ionicons.font === "object") {
      ioniconsFonts = {...ionicons.font};
    }

    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...ioniconsFonts,
        // We include SpaceMono because we use it in HomeScreen.tsx. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = (error: any) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
