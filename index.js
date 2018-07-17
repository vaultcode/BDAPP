//import a library yo help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Button from './src/components/Button';


//create a component
const App = () => (
  <View style={{ flex: 1 }}>
     <Header headerText={'BloodApp'} />
     <Button />

  </View>
  );

//render it to the device
AppRegistry.registerComponent('bloodapp', () => App);
