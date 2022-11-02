import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import LoginForm from "../../components/LoginForm/LoginForm";
const background = require("../../assets/background.png");
const logo = require("../../assets/Logo.png");
const back = require("../../assets/back-button.png");

export default function RegisterScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={background} />
      </View>

      <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.pop()}>
        <Image source={back} style={styles.backButton} />
      </TouchableOpacity>

      <Image style={styles.logo} source={logo} />

      <View>
        <LoginForm
          title={"Create Account"}
          arrayOfFields={["Name", "Email", "Password", "Confirm Password", "Location"]}
          buttonTitle={"REGISTER"}
          buttonColor={colors.orange}
          press={() => alert("Registered!")}
        />
      </View>

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  logo: {
    position: "absolute",
    height: 58,
    width: 125,
    top: 60,
    alignSelf: "center"
  },

  backButtonContainer: {
    position: "absolute",
    top: 73.75,
    left: 30
  },

  backButton: {
    width: 30,
    height: 30.5,
  },

  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundImage: {
    height: 1000,
    width: 450,
  },
});