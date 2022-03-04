import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import RecipeScreen from "../screens/RecipeScreen";
import { COLORS } from "../constant";
import Bookmarks from "../screens/Bookmarks";
import NewRecipe from "../screens/NewRecipe";
import RecipeDetail from "../screens/RecipeDetail";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabIcon = ({ focused,icon }) => {
  return (
    <View style={styles.tabIcon}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          // tintColor: focused ? COLORS.darkGreen:  COLORS.lightGray ,
        }}
      />
     <View style={styles.iconStyle}></View>
    </View>
  );
};


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          headerShown: false,
          tabBarShowLabel: false,
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elavation: 0,
            backgroundColor: COLORS.white,
            borderTopColor: "transparent",
            height: 100,
          },
        },
      }}
    >
      <Stack.Screen
        name="NewRecipe"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icon/home.png")}
            />
          ),
          focused: true,
        }}
        component={NewRecipe}
      />
      <Tab.Screen
        name="RecipeScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/icon/search.png")}
            />
          ),
         
        }}
        component={RecipeScreen}
      />
      <Tab.Screen
        name="Bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icon/bookmark-filled.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
        component={Bookmarks}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 50,
  },

  iconStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLORS.darkGreen,
  },
});

