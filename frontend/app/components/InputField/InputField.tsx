import React, { useState, FC } from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';

interface InputFieldProps {
  placeholder: string,
}

const InputField: FC<InputFieldProps> = ({ placeholder }) => {
  const [text, setText] = useState("");

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
      value={text}
      onChangeText={setText}
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
