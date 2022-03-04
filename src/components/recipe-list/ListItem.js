import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS } from "../../constant";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { updateRecipe } from "../../network/requests/recipes";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({ item, navigation }) => {
  const { recipes } = useAppContext();
  const [isFavourite, setIsFavourite] = useState(item.isFavourite);

  useEffect(async () => {
    const updatedItem = {
      id: item.id,
      name: item.name,
      country: item.country,
      image: item.image,
      ingredients: item.ingredients,
      steps: item.steps,
      isFavourite: isFavourite,
    };
    await updateRecipe(item.id, updatedItem);
  }, [isFavourite]);

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.grzay2,
        marginHorizontal: SIZES.padding,
      }}
      onPress={() => navigation.navigate("RecipeDetail", { itemId: item.id })}
    >
      <Image
        source={{
          uri: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe.jpg",
        }}
        style={{ width: 90, height: 100, borderRadius: SIZES.radius }}
      />
      {/* <Image source={categoryItem.image} resizeMode="cover" style={styles.image} /> */}
      <View style={{ width: "65%", paddingHorizontal: 20 }}>
        <Text
          style={{
            flex: 1,
            fontSize: SIZES.h2,
            lineHeight: 30,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{ color: COLORS.gray, fontSize: SIZES.body4, lineHeight: 22 }}
        >
          {item.country} | {item.isFavourite ? "Favourite" : "Not Favourite"}
        </Text>
      </View>
      <MaterialCommunityIcons
        style={{ alignSelf: "flex-start" }}
        name={isFavourite ? "star" : "star-outline"}
        size={22}
        onPress={() => setIsFavourite((prevState) => !prevState)}
      />
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
