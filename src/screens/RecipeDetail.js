import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getRecipeById } from "../network/requests/recipes";

const RecipeDetail = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState([]);

  const getData = async () => {
    const response = await getRecipeById(route.params.itemId);
    if (response && response.status === 200) {
      setRecipe(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(recipe.image);

  return (
    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{recipe.name}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {recipe.country}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {recipe.category}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {recipe.description}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {recipe.ingredients}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{recipe.steps}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{recipe.time}</Text>
        
      </View>
    </View>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({});
