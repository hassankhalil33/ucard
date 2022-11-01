import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CardComponent from "../../components/CardComponent/CardComponent";
const logo = require("../../assets/Logo.png");
const cardLogoBlue = require("../../assets/icons/IconWhiteonBlue.png");

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={{
        position: "absolute",
        top: "22%",
        left: "-9%",
        transform: [{ rotate: "-20.2deg" }]
      }}>
        <CardComponent
          name={"Hassan Khalil"}
          profession={"Web Developer"}
          description={"Tap to Share"}
          color={"#FF5722"}
          height={249}
          width={417}
          normal={false}
        />
      </View>
      <View style={{
        position: "absolute",
        top: "34%",
        left: "17%",
        transform: [{ rotate: "24.64deg" }]
      }}>
        <CardComponent
          name={"Hassan Khalil"}
          profession={"Web Developer"}
          description={"Tap to Share"}
          logo={cardLogoBlue}
          height={218}
          width={365}
          normal={false}
        />
      </View>

      <View style={styles.lowerView}>
        <Text style={styles.textMain}>Create Your Business Card in Seconds!</Text>

        <TouchableOpacity style={styles.buttonMain}>
          <Text style={styles.textInner}>Get Started</Text>
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
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  },

  logo: {
    position: "absolute",
    height: 58,
    width: 125,
    top: 60,
    left: 45,
  },

  textMain: {
    color: "#eeeeee",
    fontSize: 28,
  },

  textInner: {
    color: "#eeeeee",
    fontSize: 16,
  },

  textOther: {
    color: "#67747C",
    fontSize: 14,
  },

  lowerView: {
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
    color: "#eeeeee",
    fontSize: 14,
  }
});
