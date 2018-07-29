//import a library yo help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Button from './src/components/Button';
import Forms from './src/components/Forms';

//create a component
const App = () => (
  <View style={{ flex: 1 }}>
     <Header headerText={'Registration'} />
     <Forms />
     <Button />
  </View>
  );

//render it to the device
AppRegistry.registerComponent('form', () => App);
