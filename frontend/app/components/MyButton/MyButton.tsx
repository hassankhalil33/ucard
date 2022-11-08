import React, { FC } from "react";
import { useFonts } from 'expo-font';
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface MyButtonProps {
  title: string,
  color: string,
  press: Function
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { title, color, press } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles(color).button} onPress={() => press()}>
      <Text style={styles("0", "Poppins-Bold").text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton
