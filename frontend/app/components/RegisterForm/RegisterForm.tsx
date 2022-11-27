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
  isFieldInError: any;
  getErrorsInField: any;
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
  const { title, buttonTitle, buttonColor, press, states, getErrorsInField, isFieldInError } = props;
  const {
    name, setName,
    email, setEmail,
    password, setPassword,
    conPassword, setConPassword,
    location, setLocation
  } = states as stateType;

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
      {isFieldInError('name') &&
        getErrorsInField('name').map(errorMessage => (
          <Text style={styles().error}>{errorMessage}</Text>
        ))
      }

      <InputField
        placeholder={"Email"}
        value={email}
        setValue={setEmail}
      />
      {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text style={styles().error}>{errorMessage}</Text>
        ))
      }

      <InputField
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
        password={true}
      />
      {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text style={styles().error}>{errorMessage}</Text>
        ))
      }

      <InputField
        placeholder={"Confirm Password"}
        value={conPassword}
        setValue={setConPassword}
        password={true}
      />
      {isFieldInError('conPassword') &&
        getErrorsInField('conPassword').map(errorMessage => (
          <Text style={styles().error}>{errorMessage.replace("conPassword", "confirm password")}</Text>
        ))
      }

      <InputField
        placeholder={"Location"}
        value={location}
        setValue={setLocation}
      />
      {isFieldInError('location') &&
        getErrorsInField('location').map(errorMessage => (
          <Text style={styles().error}>{errorMessage}</Text>
        ))
      }

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
