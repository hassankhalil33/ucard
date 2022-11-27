import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useValidation } from 'react-native-form-validator';

import colors from "../../constants/pallete";
import styles from "./styles";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const background = require("../../assets/background.png");
const logo = require("../../assets/Logo.png");
const back = require("../../assets/buttons/back-button.png");


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [location, setLocation] = useState("");
  const { postRegister } = useContext(UserContext);

  const { validate, isFieldInError, getErrorsInField, getErrorMessages, isFormValid } =
    useValidation({
      state: { name, email, password, conPassword, location },
    });

  const handleRegisterButton = async () => {
    validate({
      name: { minlength: 3, required: true },
      email: { email: true, required: true },
      password: { minlength: 8, required: true },
      conPassword: { equalPassword: password, required: true },
      location: { required: true }
    });

    if (isFormValid()) {
      const data = {
        name: name,
        email: email,
        password: password,
        location: location
      }

      await postRegister(data);
      setName("");
      setEmail("");
      setPassword("");
      setConPassword("");
      setLocation("");
      alert("Registered Successfully!");
    }
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
        <RegisterForm
          title={"Create Account"}
          buttonTitle={"REGISTER"}
          buttonColor={colors.orange}
          isFieldInError={isFieldInError}
          getErrorsInField={getErrorsInField}
          states={{
            name, setName,
            email, setEmail,
            password, setPassword,
            conPassword, setConPassword,
            location, setLocation
          }}
          press={handleRegisterButton}
        />
      </View>

      <View style={styles().viewOther}>
        <Text style={styles("0", "Poppins-Bold").textOther}>You have account?  </Text>
        <TouchableOpacity>
          <Text style={styles("Poppins-Medium").buttonOther} onPress={() => navigation.navigate("login")}>sign in</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  )
}
