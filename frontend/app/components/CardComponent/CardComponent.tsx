import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';

const vw85 = (Dimensions.get('window').width / 10) * 8.5;
const vw25 = (Dimensions.get('window').height / 10) * 2.5;

interface CardComponentProps {
  color?: string,
  height?: number,
  width?: number,
  normal?: boolean,
  name: string,
  profession: string,
  description: string,
  logo?: any
}

const CardComponent: FC<CardComponentProps> = (props) => {
  const { height, width, name, profession, description, logo, color, normal } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles(color, height, width).container}>
      <Text style={styles().desc}>{description}</Text>
      <Text style={styles("0", 0, 0, normal).prof}>{profession}</Text>
      <Text style={styles().name}>{name}</Text>
      <Image style={styles().logo} source={logo} />
    </View>
  )
}

//ratio 1.65
const styles = (color = colors.blue, height = 200, width = 330, normal = true) => StyleSheet.create({
  container: {
    padding: 30,
    height: height,
    width: width,
    backgroundColor: color,
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
