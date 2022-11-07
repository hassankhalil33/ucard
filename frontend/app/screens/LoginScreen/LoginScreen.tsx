import React from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginForm from "../../components/LoginForm/LoginForm";
const background = require("../../assets/background.png");
const logo = require("../../assets/Logo.png");
const back = require("../../assets/buttons/back-button.png");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhc3NhbkBnbWFpbC5jb20iLCJpYXQiOjE2Njc2OTQwMDEsImV4cCI6Mzc2Njc2OTA0MDF9.k2iRwHz8_W1Uicb1LJR_B6cblxarN8KuXqsPGNR3T-k";

const vw10 = (Dimensions.get('window').width / 10) * 1;
const vw90 = (Dimensions.get('window').width / 10) * 9;

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    console.log(e);
  }
}

export default function LoginScreen({ navigation }) {
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

      <View style={styles.form}>
        <LoginForm
          title={"Sign In"}
          buttonTitle={"LOGIN"}
          buttonColor={colors.blue}
          press={() => storeData(token)}
        />
      </View>

      <View style={styles.viewOther}>
        <Text style={styles.textOther}>Dont have account?  </Text>
        <TouchableOpacity>
          <Text style={styles.buttonOther} onPress={() => navigation.navigate("register")}>register</Text>
        </TouchableOpacity>
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
    paddingTop: vw10,
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

  viewOther: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textOther: {
    fontFamily: "Poppins-Bold",
    color: colors.primary_lighter,
    fontSize: 14,
  },

  buttonOther: {
    fontFamily: "Poppins-Medium",
    color: colors.white,
    fontSize: 14,
  },

  form: {
    width: vw90
  }
});
