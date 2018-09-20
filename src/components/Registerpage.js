import React, { Component } from 'react';
import { Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class Registerpage extends Component {
  render() {
    const { buttonStyle, textinputStyle, textStyle } = styles;
    return (

      <ScrollView
      style={{
        backgroundColor: '#FF0000',

    }}>
      <TextInput
        style={textinputStyle}
          placeholder='Name'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={textinputStyle}
          placeholder='Location'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={textinputStyle}
          placeholder='Email'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={textinputStyle}
          placeholder='Mobile Number'
          placeholderTextColor='gray'
          underlineColorAndroid={'transparent'}
      />
      <TouchableOpacity
      style={buttonStyle} onPress={() => this.props.navigation.navigate('Location')}
      >
     <Text
       style={textStyle}
     >Submit</Text>
     </TouchableOpacity>
    </ScrollView>

    );
  }
}

const styles = {
  textinputStyle: {
    height: 60,
      backgroundColor: 'white',
      paddingTop: 10,
      borderRadius: 10,
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
      fontSize: 20
  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 11,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 120,
    height: 50
  },
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '100',
    paddingTop: 5,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50
  }
};
