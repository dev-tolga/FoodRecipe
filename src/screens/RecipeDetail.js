import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getRecipeById } from "../network/requests/recipes";

const RecipeDetail = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const getData = async () => {
    const response = await getRecipeById(route.params.itemId);
    if (response && response.status === 200) {
      setRecipe(response.data);
      setIngredients(response.data.ingredients);
      setSteps(response.data.steps);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(recipe.image);
 

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: "white",
            backgroundColor: "transparent",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe.jpg",
            }}
            style={{ width: "100%", height: 300, marginTop: 50 }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {recipe.name}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {recipe.country}
          </Text>
          {ingredients.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignItems: "center",
              textAlign: "center",
              marginTop: 5,
            }}
          ></Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Steps</Text>
          {steps.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({});
