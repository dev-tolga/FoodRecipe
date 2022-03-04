import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { updateRecipe } from "../network/requests/recipes";

import ListItem from "../components/recipe-list/ListItem";

const Bookmarks = ({ navigation }) => {
  const { recipes } = useAppContext();
  const data = recipes.filter((item) => item.isFavourite == true);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({});
