import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeDetail = ({ item, navigation }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({});
