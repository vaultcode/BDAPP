import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';

export default class Homepage extends Component {
  render() {
    const { buttonStyle, textStyle } = styles;
    return (
      <ScrollView
      style={{
        backgroundColor: '#FF0000',

    }}>
       <TouchableOpacity
       style={buttonStyle} onPress={() => this.props.navigation.navigate('Groups')}
       >
      <Text
        style={textStyle}
      >Donor</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={buttonStyle} onPress={() => this.props.navigation.navigate('Groups')}
      >
     <Text
       style={textStyle}
     >Receiver</Text>
     </TouchableOpacity>
   </ScrollView>

    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#17161b',
    fontSize: 30,
    fontWeight: '500',
    fontStyle: 'italic',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30

  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40

  }
};
