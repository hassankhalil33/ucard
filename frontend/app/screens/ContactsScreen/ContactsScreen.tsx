import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import { BarCodeScanner } from "expo-barcode-scanner";
import { readNdef } from "../../utilities/nfc";
import {
  StyleSheet,
  Text,
  View, Image,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  Alert
} from "react-native";

import NfcManager from "react-native-nfc-manager";
import CardComponent from "../../components/CardComponent/CardComponent";
import QRCodeModal from "../../components/QRCodeModal/QRCodeModal";
import styles from "./styles";
import MyButton from "../../components/MyButton/MyButton";
import colors from "../../constants/pallete";

const background = require("../../assets/background.png");
const nfcButton = require("../../assets/buttons/nfc-button.png");
const qrButton = require("../../assets/buttons/qr-button.png");
const appLogo = require("../../assets/icon.png");


export default function ContactsScreen() {
  const [cardId, setCardId] = useState("");
  const [openScanModal, setOpenScanModal] = useState(false);
  const [openQRModal, setOpenQRModal] = useState(false);
  const {
    followingData,
    getFollowingData,
    postFollowingData,
    deleteFollowCard
  } = useContext(UserContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // NfcManager.start();

  const handleBarCodeScanned = async ({ type, data }) => {
    const ApiData = {
      id: data
    }

    await postFollowingData(ApiData);
    await getFollowingData();
    setOpenScanModal(false);
    ToastAndroid.show("Card Followed Successfully!", ToastAndroid.SHORT);
  };

  const handleScanButton = () => {
    console.log("Im Here");
    setOpenScanModal(true);
  }

  const handleAddButton = async () => {
    readNdef();
  }

  const handleOpenQrButton = (id) => {
    setCardId(id);
    setOpenQRModal(true);
  }

  const handleDeleteCardButton = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are You Sure You Want to Delete?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },

        {
          text: "Delete",
          onPress: async () => {
            await deleteFollowCard(id);
            await getFollowingData();
            ToastAndroid.show("Card Deleted!", ToastAndroid.SHORT);
          }
        }
      ]
    );
  }

  const renderItems = ({ item }) => {
    return (
      <View style={styles().profile}>
        <CardComponent
          category={item.card_id.category}
          name={item.card_id.name}
          profession={item.card_id.profession}
          description={"tap to share | hold to delete"}
          onPress={() => handleOpenQrButton(item.card_id._id)}
          onHold={() => handleDeleteCardButton(item.card_id._id)}
          email={item.card_id.email}
          link={item.card_id.link}
          extraInfo={true}
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
        {followingData.length != 0 ?
          <FlatList
            data={followingData}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
          />
          :
          <Text style={styles("Poppins-Bold").text}>No Cards in Contacts</Text>
        }

      </View>

      <Modal visible={openScanModal}>
        <View style={styles().modal}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={styles().cancelButton}>
            <MyButton
              title={"Cancel"}
              color={colors.primary}
              press={() => setOpenScanModal(false)}
            />
          </View>
        </View>
      </Modal>

      <QRCodeModal
        visibility={openQRModal}
        cardId={cardId}
        logo={appLogo}
        onCancel={() => setOpenQRModal(false)}
      />

      <StatusBar style="light" />

    </View>
  )
}
