import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';
import MyButton from "../MyButton/MyButton";
import InputField from "../InputField/InputField";

interface RegisterFormProps {
  title: string;
  buttonTitle: string;
  buttonColor: string;
  press: Function;
  states: object;
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { title, buttonTitle, buttonColor, press, states } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <InputField
        placeholder={"Name"}
      />

      <InputField
        placeholder={"Email"}
      />

      <InputField
        placeholder={"Password"}
      />

      <InputField
        placeholder={"Confirm Password"}
      />

      <InputField
        placeholder={"Location"}
      />

      <View style={styles.button}>
        <MyButton
          title={buttonTitle}
          color={buttonColor}
          press={press}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%"
  },

  title: {
    color: colors.primary,
    marginBottom: 20,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    lineHeight: 30,
  },

  button: {
    width: "100%",
    marginTop: 30
  }
})

export default RegisterForm
