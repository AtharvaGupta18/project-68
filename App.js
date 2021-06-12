import React from 'react';
import { Text } from 'react-native';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
        <Appcontainer /> 
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebook },
  Instagram: { screen: Instagram }
});

const Appcontainer = createAppContainer(TabNavigator);
