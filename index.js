//import a library yo help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

//create a component
const App = () => (
     <Header headerText={'BloodGroup'} />
  );

//render it to the device
AppRegistry.registerComponent('bloodapp', () => App);
