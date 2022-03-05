import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { getRecipes } from "../network/requests/recipes";

import ListItem from "../components/recipe-list/ListItem";

const Bookmarks = ({ navigation }) => {
  const { recipes } = useAppContext();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getBookmarks = async () => {
    setLoading(true);
    const res = await getRecipes();
    setData(res.data.filter((i) => i.isFavourite == true));
    setLoading(false);
  };

  useEffect(() => {
    navigation.addListener("focus", () => getBookmarks());
  }, []);

  return loading ? (
    <ActivityIndicator size={"large"} />
  ) : (
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
