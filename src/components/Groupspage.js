import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';

export default class Groupspage extends Component {
  render() {
    const { buttonStyle, textStyle } = styles;
    return (
      <ScrollView
      style={{
        backgroundColor: '#FF0000',

    }}>
       <TouchableOpacity
       style={buttonStyle}
         onPress={() => this.props.navigation.navigate('Register')}
       >
      <Text
        style={textStyle}
      >A+</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
      >
     <Text
       style={textStyle}
     >A-</Text>
     </TouchableOpacity>

     <TouchableOpacity
     style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
     >
    <Text
      style={textStyle}
    >B+</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
    >
   <Text
     style={textStyle}
   >B-</Text>
   </TouchableOpacity>

   <TouchableOpacity
   style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
   >
  <Text
    style={textStyle}
  >AB+</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
  >
  <Text
   style={textStyle}
  >AB-</Text>
 </TouchableOpacity>

 <TouchableOpacity
 style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
 >
  <Text
  style={textStyle}
  >O+</Text>
</TouchableOpacity>

<TouchableOpacity
style={buttonStyle} onPress={() => this.props.navigation.navigate('Register')}
>
  <Text
 style={textStyle}
  >O-</Text>
</TouchableOpacity>
   </ScrollView>

    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    fontStyle: 'italic',
    paddingTop: 2,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 11,
    marginLeft: 60,
    marginRight: 60,
    height: 50
  }
};
