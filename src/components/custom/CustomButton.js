import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({pressEvent, buttonStyle, buttonTitle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert("Button pressed!");
      }}
      style={{...buttonStyle}}
    >
      <Text
        style={{
          ...textStyle,
        }}
      >
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton

const styles = StyleSheet.create({
   
})