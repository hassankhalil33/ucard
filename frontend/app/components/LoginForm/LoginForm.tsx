import React, { FC } from "react";
import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import styles from "./styles";
import MyButton from "../MyButton/MyButton";
import InputField from "../InputField/InputField";

interface LoginFormProps {
  title: string;
  buttonTitle: string;
  buttonColor: string;
  press: Function;
  states: object;
}

type stateType = {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { title, buttonTitle, buttonColor, press, states } = props;

  const {
    email, setEmail,
    password, setPassword
  } = states as stateType;

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles().container}>
      <Text style={styles("Poppins-Bold").title}>{title}</Text>

      <InputField
        placeholder={"Email"}
        value={email}
        setValue={setEmail}
      />

      <InputField
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
        password={true}
      />

      <View style={styles().button}>
        <MyButton
          title={buttonTitle}
          color={buttonColor}
          press={press}
        />
      </View>

    </View>
  )
}

export default LoginForm
