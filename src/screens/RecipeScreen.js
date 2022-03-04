import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { SIZES, COLORS } from "../constant";
import ListItem from "../components/recipe-list/ListItem";

const RecipeScreen = ({ navigation }) => {
  const { recipes } = useAppContext();
  console.log(recipes);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search) => {

    setSearchTerm(search);
    if (search.trim()) {
      console.log(search);
      setSearchResults(() =>
        recipes.filter(
          (recipe) =>
            recipe.name
              .toLowerCase()
              .trim()
              .includes(search.toLowerCase().trim()) && recipe
        )
      );
    } else {
      setSearchResults([]);
    }
  };
  const searchBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 50,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={require("../../assets/icon/search.png")}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
            fontSize: SIZES.body4,
            lineHeight: 22,
          }}
          placeholder="Search Recipes"
          placeholderTextColor={COLORS.gray}
          value={searchTerm}
          onChangeText={(search) => handleSearch(search)}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {searchBar()}
      <FlatList
        data={searchResults.length > 0 ? searchResults : recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#357C3C",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    height: 40,
    marginTop: 5,
  },
});
