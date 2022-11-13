import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ToastAndroid, Modal } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import { BarCodeScanner } from "expo-barcode-scanner";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import CardComponent from "../../components/CardComponent/CardComponent";
import styles from "./styles";
import MyButton from "../../components/MyButton/MyButton";
import colors from "../../constants/pallete";
const background = require("../../assets/background.png");
const nfcButton = require("../../assets/buttons/nfc-button.png");
const qrButton = require("../../assets/buttons/qr-button.png");

export default function ContactsScreen() {
  const [openModal, setOpenModal] = useState(false);
  const { followingData, getFollowingData, postFollowingData } = useContext(UserContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    const ApiData = {
      id: data
    }

    await postFollowingData(ApiData);
    await getFollowingData();
    setOpenModal(false);
    ToastAndroid.show("Card Followed Successfully!", ToastAndroid.SHORT);
  };

  const handleScanButton = () => {
    console.log("Im Here");
    setOpenModal(true);
  }

  const handleAddButton = () => {
    readNdef();
  }

  NfcManager.start();

  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      alert("Started NFC Read");
      const tag = await NfcManager.getTag();

      const data = {
        id: tag
      }

      await postFollowingData(data);
      await getFollowingData();

      alert(tag);
    } catch (ex) {
      alert(ex);
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

      <TouchableOpacity style={styles().addButtonContainer} onPress={handleAddButton}>
        <Image source={nfcButton} style={styles().addButton} />
      </TouchableOpacity>

      <TouchableOpacity style={styles().scanButtonContainer} onPress={handleScanButton}>
        <Image source={qrButton} style={styles().scanButton} />
      </TouchableOpacity>

      <View style={styles().innerContainer}>
        <FlatList
          data={followingData}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal visible={openModal}>
        <View style={styles().modal}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={styles().cancelButton}>
            <MyButton
              title={"Cancel"}
              color={colors.primary}
              press={() => setOpenModal(false)}
            />
          </View>
        </View>
      </Modal>

      <StatusBar style="light" />

    </View>
  )
}
