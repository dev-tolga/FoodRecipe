import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeDetail = ({ navigation,route }) => {
  return (
    <View>
      <Text>{route.params}</Text>
    </View>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({});
