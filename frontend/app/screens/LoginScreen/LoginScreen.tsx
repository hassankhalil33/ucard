import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import colors from "../../constants/pallete";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginForm from "../../components/LoginForm/LoginForm";
const background = require("../../assets/background.png");
const logo = require("../../assets/Logo.png");
const back = require("../../assets/buttons/back-button.png");

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    console.log(e);
  }
}

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postLogin, setLogged } = useContext(UserContext);

  const handleLoginButton = async () => {
    const data = {
      email: email,
      password: password
    }

    const token = await postLogin(data);
    storeData(token);
    alert("Logged In Successfully!");
    setLogged(true);
  }

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles().container}>
      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <TouchableOpacity style={styles().backButtonContainer} onPress={() => navigation.pop()}>
        <Image source={back} style={styles().backButton} />
      </TouchableOpacity>

      <Image style={styles().logo} source={logo} />

      <View style={styles().form}>
        <LoginForm
          title={"Sign In"}
          buttonTitle={"LOGIN"}
          buttonColor={colors.blue}
          states={{
            email, setEmail,
            password, setPassword
          }}
          press={handleLoginButton}
        />
      </View>

      <View style={styles().viewOther}>
        <Text style={styles("0", "Poppins-Bold").textOther}>Dont have account?  </Text>
        <TouchableOpacity>
          <Text style={styles("Poppins-Medium").buttonOther} onPress={() => navigation.navigate("register")}>register</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  )
}
