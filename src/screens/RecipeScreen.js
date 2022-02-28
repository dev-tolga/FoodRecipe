import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { SIZES, COLORS } from "../constant";

const RecipeScreen = ({ navigation }) => {
  const { recipes } = useAppContext();
  console.log("RecipeScreen: ", recipes);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
      />
    </SafeAreaView>
  );
};

const renderRecipe = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.grzay2,
        marginHorizontal: SIZES.padding,
      }}
      onPress={() => {
        navigation.navigate("RecipeDetail", { item });
      }}
    >
      <Image
        source={{
          uri: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe.jpg",
        }}
        style={{ width: 90, height: 100, borderRadius: SIZES.radius }}
      />

      {/* <Image source={categoryItem.image} resizeMode="cover" style={styles.image} /> */}
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
        <Text
          style={{ color: COLORS.gray2, fontSize: SIZES.body4, lineHeight: 22 }}
        >
          {item.country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
