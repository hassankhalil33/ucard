import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen(props) {
  const { height, width, name, profession, description, logo, color } = props;

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303841",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },


});
