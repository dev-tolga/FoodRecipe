import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import React, { useState } from "react";
import { Formik, Field } from "formik";
import { useAppContext } from "../../contexts/AppContext";
import { postRecipe } from "../../network/requests/recipes";

import { SIZES, COLORS } from "../../constant";
import CustomInput from "../custom/CustomInput";
import CustomButton from "../custom/CustomButton";

const NewRecipeForm = () => {
  const { recipes } = useAppContext();

  const [name, setName] = useState("");
  const [ingredients, setIgredients] = useState("");
  const [country, setCountry] = useState("");
  const [steps, setSteps] = useState("");

  const initialForm = {
    id: recipes.length + 1,
    name: name,
    image: null,
    country: country,
    ingredients: ingredients.split(","),
    steps: steps.split(","),
  };

  const handleAdd = () => {
    postRecipe(initialForm);
  };

  return (
    <View>
      <CustomInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder={"Food Name"}
      />
      <CustomInput
        onChangeText={(text) => setCountry(text)}
        value={country}
        placeholder={"Food Country"}
      />
      <CustomInput
        onChangeText={(text) => setIgredients(text)}
        value={ingredients}
        placeholder={'Ingredients (seperate them with comma ",")'}
      />
      <CustomInput
        onChangeText={(text) => setSteps(text)}
        value={steps}
        placeholder={'Steps (seperate them with comma ",")'}
      />
      <CustomButton
        buttonStyle={{
          paddingVertical: 10,
          borderRadius: 20,
          borderColor: COLORS.darkLime,
          borderWidth: 1,
          alignItems: "center",
          backgroundColor: COLORS.darkGreen,
          marginBottom: SIZES.radius,
          margin: 30,
        }}
        textStyle={{
          color: COLORS.white,
          fontSize: 15,
          fontWeight: "bold",
        }}
        buttonTitle={"Add Recipe"}
        pressEvent={handleAdd}
      />
    </View>
  );
};

export default NewRecipeForm;

const styles = StyleSheet.create({});
