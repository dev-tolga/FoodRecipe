import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppContext } from "../contexts/AppContext";

const RecipeScreen = () => {
  const { recipes } = useAppContext();
  console.log("RecipeScreen: ", recipes);

  return (
    <View>
      {recipes.map((recipe, index) => {
        return (
          <View key={index}>
            <Text>{recipe.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
