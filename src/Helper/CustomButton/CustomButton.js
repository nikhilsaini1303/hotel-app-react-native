import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[ 
          styles.container,
          styles[`container_${type}`],
          bgColor ? {backgroundColor : bgColor} : {},
        ]}
    >
      <Text 
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
          ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container : {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase'
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
  container_TOAST: {
    marginTop: 30,
    backgroundColor: '#3B71F3',
  }
});