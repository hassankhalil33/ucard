import React, { useState, FC } from "react";
import { StyleSheet, Dimensions, Text, TouchableOpacity, View } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';

const vw85 = (Dimensions.get('window').width / 10) * 8.5;

interface LoginFormProps {
  title: string,
  [arrayOfFields: string]: any,
  buttonTitle: string,
  buttonColor: string
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { title, arrayOfFields, buttonTitle, buttonColor } = props;

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

      {arrayOfFields.map((field, index) => {
        return (
          <Text key={index}>{field}</Text>
        )
      })}

      <MyButton title={buttonTitle} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 25,
    padding: 20,
    width: vw85
  },

  title: {
    color: colors.primary,
    marginBottom: 20,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    lineHeight: 30,
  }
})

export default LoginForm
