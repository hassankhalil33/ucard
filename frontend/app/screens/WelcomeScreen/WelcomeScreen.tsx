import React from "react";
import { StyleSheet, Text, View, Button, TouchableHighlight } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.lowerView}>
        <Text style={styles.textMain}>Create Your Business Card in Seconds!</Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.textInner}>Welcome</Text>
        </TouchableHighlight>
        <Text style={styles.textOther}>
          You have account?
          <Button title="sign in" />
        </Text>
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

  textMain: {
    color: "#f3f3f3",
    fontSize: 28,
  },

  textInner: {
    color: "#f3f3f3",
    fontSize: 16,
  },

  textOther: {
    color: "#f3f3f3",
    fontSize: 11,
  },

  lowerView: {
    alignSelf: "flex-end",
    padding: 45,
  },

  button: {
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
  }
});
