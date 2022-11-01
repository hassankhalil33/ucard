import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CardComponent from "../../components/CardComponent/CardComponent";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
const background = require("../../assets/background.png");
const logo = require("../../assets/Logo.png");
const cardLogoBlue = require("../../assets/icons/IconWhiteonBlue.png");

export default function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={background} />
      </View>

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
          color={colors.orange}
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
          <Text style={styles.textOther}>You have account?  </Text>
          <TouchableOpacity>
            <Text style={styles.buttonOther}>sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundImage: {
    height: 1000,
    width: 450,
  },

  textMain: {
    fontFamily: "Poppins-Medium",
    color: colors.white,
    fontSize: 28,
  },

  textInner: {
    fontFamily: "Poppins-Medium",
    color: colors.white,
    fontSize: 16,
  },

  textOther: {
    fontFamily: "Poppins-Bold",
    color: colors.primary_lighter,
    fontSize: 14,
  },

  lowerView: {
    padding: 45,
  },

  buttonMain: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary_light,
    marginTop: 12,
    marginBottom: 12,
    width: 160,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.17)",
    borderRadius: 18,
  },

  buttonOther: {
    fontFamily: "Poppins-Medium",
    color: colors.white,
    fontSize: 14,
  }
});
