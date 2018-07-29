import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
   return (
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>Submit
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ddd',
    fontSize: 25,
    fontWeight: '500',
    paddingTop: 2,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50

  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: 'red',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 11,
    marginLeft: 83,
    marginRight: 83,
    marginBottom: 120,
    height: 50

  }
};

export default Button;
