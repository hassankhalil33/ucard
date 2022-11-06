import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';
const cardLogoBlue = require("../../assets/icons/IconWhiteonBlue.png");
const cardLogoOrange = require("../../assets/icons/IconWhiteonOrange.png");

const vw85 = (Dimensions.get('window').width / 10) * 8.5;
const vw25 = (Dimensions.get('window').height / 10) * 2.5;

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
    <View style={styles(category, height, width).container}>
      <Text style={styles().desc}>{description}</Text>
      <Text style={styles("0", 0, 0, normal).prof}>{profession}</Text>
      <Text style={styles().name}>{name}</Text>
      <Image style={styles().logo} source={category == "personal" ? cardLogoBlue : cardLogoOrange} />
    </View>
  )
}

//ratio 1.65
const styles = (category = "personal", height = 200, width = 330, normal = true) => StyleSheet.create({
  container: {
    padding: 30,
    height: height,
    width: width,
    backgroundColor: category == "personal" ? colors.blue : colors.orange,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.17)",
    borderRadius: 20,
  },

  desc: {
    fontFamily: "Poppins-Regular",
    color: colors.white,
    fontSize: 14
  },

  prof: {
    fontFamily: "Poppins-Medium",
    color: colors.white,
    fontSize: 14,
    opacity: 0.5,
    marginTop: normal ? 75 : "28%"
  },

  name: {
    fontFamily: "Poppins-Medium",
    color: colors.white,
    fontSize: 22,
  },

  logo: {
    position: "absolute",
    height: 27,
    width: 40,
    bottom: 30,
    right: 35,
  }
});

export default CardComponent
