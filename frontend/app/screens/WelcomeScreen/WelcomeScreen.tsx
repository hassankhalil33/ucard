import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CardComponent from "../../components/CardComponent/CardComponent";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />

      <CardComponent />

      <View style={styles.lowerView}>
        <Text style={styles.textMain}>Create Your Business Card in Seconds!</Text>

        <TouchableOpacity style={styles.buttonMain}>
          <Text style={styles.textInner}>Welcome</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textOther}>You have account? </Text>
          <TouchableOpacity>
            <Text style={styles.buttonOther}>sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303841",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  logo: {
    position: "absolute",
    height: 58,
    width: 125,
    top: 60,
    left: 45,
  },

  textMain: {
    color: "#f3f3f3",
    fontSize: 28,
  },

  textInner: {
    color: "#f3f3f3",
    fontSize: 16,
  },

  textOther: {
    color: "#67747C",
    fontSize: 14,
  },

  lowerView: {
    alignSelf: "flex-end",
    padding: 45,
  },

  buttonMain: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A4750",
    marginTop: 12,
    marginBottom: 12,
    width: 160,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.17)",
    borderRadius: 18,
  },

  buttonOther: {
    color: "#f3f3f3",
    fontSize: 14,
  }
});
