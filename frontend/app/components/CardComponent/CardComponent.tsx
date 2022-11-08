import React, { FC } from "react";
import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";
const cardLogoBlue = require("../../assets/icons/IconWhiteonBlue.png");
const cardLogoOrange = require("../../assets/icons/IconWhiteonOrange.png");

interface CardComponentProps {
  height?: number,
  width?: number,
  normal?: boolean,
  name: string,
  profession: string,
  description: string,
  category: string
}

const CardComponent: FC<CardComponentProps> = (props) => {
  const { height, width, name, profession, description, normal, category = "personal" } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles("0", category, height, width).container}>
      <Text style={styles("Poppins-Regular").desc}>{description}</Text>
      <Text style={styles("Poppins-Medium", "0", 0, 0, normal).prof}>{profession}</Text>
      <Text style={styles("Poppins-Medium").name}>{name}</Text>
      <Image style={styles().logo} source={category == "personal" ? cardLogoBlue : cardLogoOrange} />
    </View>
  )
}

export default CardComponent
