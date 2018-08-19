import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homepage from './src/components/Homepage';
import Groupspage from './src/components/Groupspage';
import Registerpage from './src/components/Registerpage';
import Location from './src/components/Location';


export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: { screen: Homepage,
     navigationOptions: () => ({
      title: 'BLOODAPP',
      headerStyle: {
        backgroundColor: '#FF0000',
        borderWidth: 0.30,
        height: 70,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        marginTop: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 35,
        marginLeft: 95,
        marginRight: 83,
        fontStyle: 'italic',
        fontWeight: '500',
        marginBottom: 10
      },

    })
   },
  Groups: { screen: Groupspage,
    navigationOptions: () => ({
     title: 'SELECT GROUP',
     headerStyle: {
       backgroundColor: '#FF0000',
       borderWidth: 0.30,
       height: 70,
       paddingTop: 20,
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 5 },
       shadowOpacity: 0.5,
       elevation: 2,
       marginTop: 0
     },
     headerTitleStyle: {
       color: 'white',
       fontSize: 35,
       fontStyle: 'italic',
       fontWeight: '500',
       marginBottom: 10
     },

   })
  },
  Register: { screen: Registerpage,
    navigationOptions: () => ({
     title: 'REGISTRATION',
     headerStyle: {
       backgroundColor: '#FF0000',
       borderWidth: 0.30,
       height: 70,
       paddingTop: 20,
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 5 },
       shadowOpacity: 0.5,
       elevation: 2,
       marginTop: 0
     },
     headerTitleStyle: {
       color: 'white',
       fontSize: 35,
       fontStyle: 'italic',
       fontWeight: '500',
       marginBottom: 10
     },
   })
  },
  Location: { screen: Location,
    navigationOptions: () => ({
     title: 'SELECT GROUP',
     headerStyle: {
       backgroundColor: '#FF0000',
       borderWidth: 0.30,
       height: 70,
       paddingTop: 20,
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 5 },
       shadowOpacity: 0.5,
       elevation: 2,
       marginTop: 0
     },
     headerTitleStyle: {
       color: 'white',
       fontSize: 35,
       fontStyle: 'italic',
       fontWeight: '500',
       marginBottom: 10
     },

   })
  },

});

AppRegistry.registerComponent('BloodApp', () => App);
