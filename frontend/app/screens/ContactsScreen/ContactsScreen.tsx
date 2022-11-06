import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, Dimensions } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import axios from "../../utilities/axios";
import CardComponent from "../../components/CardComponent/CardComponent";
import UserContext from "../../utilities/UserContext";
const background = require("../../assets/background.png");

export default function ContactsScreen(props) {
  const { followingData, setFollowingData, token } = useContext(UserContext);

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
        <CardComponent
          category={item.card_id.category}
          name={item.card_id.name}
          profession={item.card_id.profession}
          description={"hold to share"}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={background} />
      </View>

      <Text style={styles.header}>Contacts</Text>

      <View style={styles.innerContainer}>
        <FlatList
          data={followingData}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
        />
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

  innerContainer: {
    paddingBottom: "35%",
    marginTop: "10%",
  },

  profile: {
    marginTop: 15
  },

})
