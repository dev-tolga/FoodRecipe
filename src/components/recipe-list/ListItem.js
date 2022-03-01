import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS } from "../../constant";
import React from "react";

const ListItem = ({ item,navigation }) => {
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
      onPress={() => navigation.navigate("RecipeDetail", item.id)}
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
          style={{
            color: COLORS.gray2,
            fontSize: SIZES.body4,
            lineHeight: 22,
          }}
        >
          {item.country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
