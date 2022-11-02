import React, { useState, FC } from "react";
import { useFonts } from 'expo-font';
import { TouchableOpacity } from "react-native";

interface MyButtonProps {
  title: string,
  press: Function
}

const MyButton: FC<MyButtonProps> = (props) => {


  return (
    <TouchableOpacity>
      <Text>{ }</Text>
    </TouchableOpacity>
  )
}

export default MyButton
