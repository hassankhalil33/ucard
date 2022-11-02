import React, { useState, FC } from "react";
import { useFonts } from 'expo-font';
import { TouchableOpacity, Text } from "react-native";

interface MyButtonProps {
  title: string,
  press: Function
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { title, press } = props;

  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton
