//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//making a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    elevation: 2,
    marginTop: 10
  },
  textStyle: {
    color: '#ddd',
    fontSize: 50,
    fontWeight: '400',
    marginBottom: 10
 }
};

//make the component available to other parts of the app
export default Header;
