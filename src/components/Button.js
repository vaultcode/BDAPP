import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
   return (
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>Donate
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#17161b',
    fontSize: 30,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30

  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20

  }
};

export default Button;
