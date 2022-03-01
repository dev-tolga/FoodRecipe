import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { SIZES, COLORS } from "../constant";
import ListItem from "../components/recipe-list/ListItem";

const RecipeScreen = ({ navigation }) => {
  const { recipes } = useAppContext();
  console.log(recipes);

 
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
