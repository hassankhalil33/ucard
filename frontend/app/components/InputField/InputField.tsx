import React, { useState, FC, useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';
import { useFocusEffect } from "@react-navigation/native";

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
      style={styles.field}
      placeholder={placeholder}
      placeholderTextColor={"#989CA0"}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  )
}

const styles = StyleSheet.create({
  field: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    color: colors.primary,
    borderRadius: 10,
    lineHeight: 27,
    marginTop: 5,
    marginBottom: 5
  }
})

export default InputField
