import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../constant";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../components/custom/CustomButton";

const Login = () => {
  const img = '../../assets/images/login-background.png';
  return (
    <View style={styles.container}>
      <View
        style={{
          height: SIZES > 800 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={require(img)}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.fontSizeLarge,
                lineHeight: 30,
                fontWeight: "bold",
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
          }}
        >
          WELCOME TO THE FOOD APP
        </Text>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            buttonStyle={{
             
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
              alignItems: "center",
              backgroundColor: COLORS.darkGreen,
              marginBottom: SIZES.radius,
            }}
            textStyle={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
            }}
            pressEvent={() => {
              alert("Button pressed!");
            }}
            buttonTitle="Login"
          />
          <CustomButton
            buttonStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
              alignItems: "center",
              backgroundColor: COLORS.darkGreen,
              marginBottom: 30
            }}
            textStyle={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
            }}
            pressEvent={() => {
              alert("Button pressed!");
            }}
            buttonTitle="Register"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
   
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  buttonStyle: {
     color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#2AD699',
        borderColor: '#2AD699',
  },

});
