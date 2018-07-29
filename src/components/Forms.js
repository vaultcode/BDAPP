import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';

export default class Forms extends Component {

  render() {
    return (
      <ScrollView>
      <TextInput
        style={{ height: 60,
          borderColor: 'black',
          borderWidth: 2,
          paddingTop: 10,
          fontSize: 20,
          borderRadius: 8,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 15 }}
          placeholder='Name'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={{ height: 60,
          borderColor: 'black',
          paddingTop: 10,
          borderRadius: 8,
          marginTop: 15,
          fontSize: 20,
          marginLeft: 10,
          marginRight: 10,
          borderWidth: 2 }}
          placeholder='Location'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={{ height: 60,
          borderColor: 'black',
          paddingTop: 10,
          borderRadius: 8,
          marginTop: 15,
          marginLeft: 10,
          marginRight: 10,
          fontSize: 20,
          borderWidth: 2 }}
          placeholder='Email'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={{ height: 60,
          borderColor: 'black',
          paddingTop: 10,
          borderRadius: 8,
          marginTop: 15,
          marginLeft: 10,
          marginRight: 10,
          fontSize: 20,
          borderWidth: 2 }}
          placeholder='Mobile Number'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
    </ScrollView>
    );
  }
}


// skip this line if using Create React Native App
