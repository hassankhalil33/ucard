import React, { useContext } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import CardComponent from "../../components/CardComponent/CardComponent";
import styles from "./styles";
const background = require("../../assets/background.png");

export default function ContactsScreen() {
  const { followingData } = useContext(UserContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  NfcManager.start();

  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const tag = await NfcManager.getTag();
      console.log("Read Successfull!", tag);
    } catch (ex) {
      console.log("Error: ", ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  const renderItems = ({ item }) => {
    return (
      <View style={styles().profile}>
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
    <View style={styles().container}>

      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <Text style={styles("Poppins-Bold").header}>Contacts</Text>

      <View style={styles().innerContainer}>
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
