import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon } from '../components/TabBarIcon';
import { HomeScreen } from '../screens/HomeScreen';
import { LinksScreen } from '../screens/LinksScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { CounterScreen } from "../screens/CounterScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// see https://reactnavigation.org/docs/en/bottom-tab-navigator.html#tabbaricon
interface TabBarIconOptions {
  focused: boolean;
  horizontal: boolean;
  tintColor: string;
}

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }: TabBarIconOptions ) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CounterStack = createStackNavigator({
  Counter: CounterScreen,
});

CounterStack.navigationOptions = {
  tabBarLabel: "Counter",
  tabBarIcon: ({ focused }: TabBarIconOptions) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }: TabBarIconOptions) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }: TabBarIconOptions) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  CounterStack,
  LinksStack,
  SettingsStack,
});
