import React, { useState, FC } from "react";
import { useFonts } from 'expo-font';
import { StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";

const vw70 = (Dimensions.get('window').width / 10) * 7;

interface MyButtonProps {
  title: string,
  press: Function
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { title, press } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={() => press()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {

  },

  text: {

  }
})

export default MyButton
