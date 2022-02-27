import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from '../screens/Login';
import RecipeScreen from "../screens/RecipeScreen";
import { COLORS } from "../constant";
import Borkmarks from "../screens/Borkmarks";
import NewRecipe from "../screens/NewRecipe";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Stack.Screen name="NewRecipe" component={NewRecipe} />
      <Tab.Screen name="RecipeScreen" component={RecipeScreen} />
      <Tab.Screen name="Borkmarks" component={Borkmarks} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown:false }} >
   <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
   }} />
    <Stack.Screen name="Home" component={TabNavigator}/>
   </Stack.Navigator>
  );
};

export default AppNavigator;