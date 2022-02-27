import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "./src/constant";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
});
