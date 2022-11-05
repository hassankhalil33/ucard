import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import profileData from "../../constants/profileData";
import MyButton from "../../components/MyButton/MyButton";
const background = require("../../assets/background.png");

export default function NotificationsScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderItems = ({ item }) => {
    return (
      <View style={styles.profile}>
        <ProfileComponent
          name={item.name}
          profession={item.profession}
          dark={true}
          timestamp={"19:54"}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={background} />
      </View>

      <Text style={styles.header}>Notifications</Text>

      <View style={styles.innerContainer}>
        <FlatList
          data={profileData}
          renderItem={renderItems}
        />

        <View style={styles.button}>
          <MyButton
            title={"Delete Notifications"}
            color={colors.primary}
            press={() => alert("Notifications Deleted!")}
          />
        </View>

      </View>

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column"
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

  header: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: colors.white,
    paddingTop: 75
  },

  profile: {
    marginTop: 15
  },

  innerContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: "10%",
    paddingBottom: "50%",
    marginTop: "10%",
  },

  button: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: "26%",
    width: "100%",
  }
})
