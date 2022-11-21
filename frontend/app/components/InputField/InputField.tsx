import React, { FC } from "react";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

interface InputFieldProps {
  placeholder: string;
  value: string;
  setValue: Function;
  password?: boolean;
}

const InputField: FC<InputFieldProps> = (props) => {
  const { placeholder, value, setValue, password = false } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TextInput
      secureTextEntry={password}
      style={styles("Poppins-Medium").field}
      placeholder={placeholder}
      placeholderTextColor={"#989CA0"}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  )
}

export default InputField
