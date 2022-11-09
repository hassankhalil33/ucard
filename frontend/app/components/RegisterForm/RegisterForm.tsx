import React, { FC } from "react";
import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import styles from "./styles";
import MyButton from "../MyButton/MyButton";
import InputField from "../InputField/InputField";

interface RegisterFormProps {
  title: string;
  buttonTitle: string;
  buttonColor: string;
  press: Function;
  states: object;
}

type stateType = {
  name: string;
  setName: Function;
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  conPassword: string;
  setConPassword: Function;
  location: string;
  setLocation: Function;
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { title, buttonTitle, buttonColor, press, states } = props;
  const { name, setName,
    email, setEmail,
    password, setPassword,
    conPassword, setConPassword,
    location, setLocation } = states as stateType;

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles().container}>
      <Text style={styles("Poppins-Bold").title}>{title}</Text>

      <InputField
        placeholder={"Name"}
        value={name}
        setValue={setName}
      />

      <InputField
        placeholder={"Email"}
        value={email}
        setValue={setEmail}
      />

      <InputField
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
      />

      <InputField
        placeholder={"Confirm Password"}
        value={conPassword}
        setValue={setConPassword}
      />

      <InputField
        placeholder={"Location"}
        value={location}
        setValue={setLocation}
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

export default RegisterForm
