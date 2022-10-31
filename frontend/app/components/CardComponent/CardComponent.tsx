import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const vw85 = (Dimensions.get('window').width / 10) * 8.5;
const vw25 = (Dimensions.get('window').height / 10) * 2.5;

export default function WelcomeScreen(props) {
  const { height, width, name, profession, description, logo, color, normal } = props;

  return (
    <View style={styles(color, height, width).container}>
      <Text style={styles().desc}>{description}</Text>
      <Text style={styles("0", 0, 0, normal).prof}>{profession}</Text>
      <Text style={styles().name}>{name}</Text>
      <Image style={styles().logo} source={logo} />
    </View>
  )
}

const styles = (color = "#00ADB5", height = 200, width = 330, normal = true) => StyleSheet.create({
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
    color: "#eeeeee",
    fontSize: 14
  },

  prof: {
    color: "#eeeeee",
    fontSize: 14,
    opacity: 0.5,
    marginTop: normal ? 75 : "28%"
  },

  name: {
    color: "#eeeeee",
    fontSize: 22,
    fontWeight: "500",
  },

  logo: {
    position: "absolute",
    height: 27,
    width: 40,
    bottom: 30,
    right: 35,
  }
});
