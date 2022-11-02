import React, { useState, FC } from "react";
import { useFonts } from 'expo-font';
import { StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import colors from "../../constants/pallete";

interface MyButtonProps {
  title: string,
  color: string,
  press: Function
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { title, color, press } = props;

  return (
    <TouchableOpacity style={styles(color).button} onPress={() => press()}>
      <Text style={styles().text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = (color = colors.blue) => StyleSheet.create({
  button: {
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
  },

  text: {

  }
})

export default MyButton
