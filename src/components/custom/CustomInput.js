import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constant";

const CustomInput = ({
  inputValue,
  onChangeText,
  value,
  placeholder,
  isRequired,
  isMultiline,
  onPress,
  isAddable,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={isMultiline}
      />
      {isAddable && (
        <MaterialCommunityIcons
          name="plus-circle"
          size={20}
          color={COLORS.darkLime}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 20,
  },
});
