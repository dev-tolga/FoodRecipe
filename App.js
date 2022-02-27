import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "./src/constant";
import AppNavigator from "./src/navigation/AppNavigator";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/contexts/AppContext";

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
