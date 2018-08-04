import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import Homepage from './src/components/Homepage';
import Groupspage from './src/components/Groupspage';
import Registerpage from './src/components/Registerpage';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: { screen: Homepage },
  Groups: { screen: Groupspage,
    navigationOptions: ({ navigation }) => ({
          headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
        })
  },
  Register: { screen: Registerpage,
    navigationOptions: ({ navigation }) => ({
          headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
        })
      },
});

AppRegistry.registerComponent('BloodApp', () => App);
