import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import CardComponent from "../../components/CardComponent/CardComponent";
const background = require("../../assets/background.png");
const logo = require("../../assets/Logo.png");

export default function WelcomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles().container}>
      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <Image style={styles().logo} source={logo} />

      <View style={{
        position: "absolute",
        top: "22%",
        left: "-9%",
        transform: [{ rotate: "-20.2deg" }]
      }}>
        <CardComponent
          category={"business"}
          name={"Hassan Khalil"}
          profession={"Web Developer"}
          description={"Tap to Share"}
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
          category={"personal"}
          name={"Hassan Khalil"}
          profession={"Web Developer"}
          description={"Tap to Share"}
          height={218}
          width={365}
          normal={false}
        />
      </View>

      <View style={styles().lowerView}>
        <Text style={styles("Poppins-Medium").textMain}>Create Your Business Card in Seconds!</Text>

        <TouchableOpacity style={styles().buttonMain} onPress={() => navigation.navigate("register")}>
          <Text style={styles("Poppins-Medium").textInner}>Get Started</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles("0", "Poppins-Bold").textOther}>You have account?  </Text>
          <TouchableOpacity>
            <Text style={styles("Poppins-Medium").buttonOther} onPress={() => navigation.navigate("login")}>sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View >
  );
}
