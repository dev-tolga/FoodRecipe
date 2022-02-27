import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({pressEvent, buttonStyle, buttonTitle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={pressEvent}
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