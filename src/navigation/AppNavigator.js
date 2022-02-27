import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
   <Stack.Navigator>
   <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
   }} />
   </Stack.Navigator>
  );
};

export default AppNavigator;
