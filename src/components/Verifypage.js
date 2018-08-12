import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default class Verifypage extends Component {
  render() {
    const { buttonStyle, btnStyle, txtStyle, textinputStyle, textStyle } = styles;
    return (
      <ScrollView
      style={{
        backgroundColor: '#FF0000',
    }}>
  <TextInput
    style={textinputStyle}
     underlineColorAndroid={'transparent'}
     placeholder={'_ _ _ _'}
     keyboardType={'phone-pad'}
     returnKeyType={'go'}
     autoFocus
     maxLength={4}
  />

  <TouchableOpacity
  style={buttonStyle}
  >
 <Text
   style={textStyle}
 >Resend OTP</Text>
 </TouchableOpacity>

 <TouchableOpacity
 style={btnStyle}
 >
<Text
  style={txtStyle}
>Submit</Text>
</TouchableOpacity>
</ScrollView>
    );
  }
}

const styles = {
  textinputStyle: {
    backgroundColor: 'white',
    height: 70,
    marginTop: 100,
    borderRadius: 15,
    marginLeft: 80,
    marginRight: 80,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '100'
  },
  buttonStyle: {
    alignSelf: 'auto',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 73,
    marginRight: 73,
    marginBottom: 120,
    height: 40
  },
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '100',
    paddingTop: 5,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50
  },
  btnStyle: {
    backgroundColor: 'white',
    alignSelf: 'auto',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 500,
    height: 50
  },
  txtStyle: {
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
