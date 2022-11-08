import React, { useState, FC, useEffect } from "react";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

interface InputFieldProps {
  placeholder: string;
  value: string;
  setValue: Function;
}

const InputField: FC<InputFieldProps> = ({ placeholder, value, setValue }) => {
  const [thisValue, setThisValue] = useState("Lara");

  useEffect(() => {
    console.log(thisValue);
  }, [thisValue])

  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TextInput
      style={styles("Poppins-Medium").field}
      placeholder={placeholder}
      placeholderTextColor={"#989CA0"}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  )
}

export default InputField
