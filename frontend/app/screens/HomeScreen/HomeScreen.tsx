import React, { useEffect, useContext, useState } from "react";
import { Text, View, Image, FlatList, Dimensions, Modal, TouchableOpacity, Platform } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import { BarCodeScanner } from 'expo-barcode-scanner';
import NfcManager, { NfcTech, Ndef } from "react-native-nfc-manager";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import styles from "./styles";
import Carousel from "react-native-reanimated-carousel";
import QRCode from "react-native-qrcode-svg";
import CardComponent from "../../components/CardComponent/CardComponent";
import InputField from "../../components/InputField/InputField";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import profData from "../../constants/profileData";
import colors from "../../constants/pallete";
const background = require("../../assets/background.png");
const appLogo = require("../../assets/icon.png");

const vh53 = (Dimensions.get('window').height / 10) * 5.3;
const vw60 = (Dimensions.get('window').width / 10) * 6;
const vw100 = (Dimensions.get('window').width / 10) * 10;


export default function HomeScreen() {
  const [cardId, setCardId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [hasPermission, setHasPermission] = useState(null);

  const {
    cardData,
    token,
    getToken,
    getCardData,
    getFollowingData,
    postNotificationToken
  } = useContext(UserContext);

  const getBarCodePermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const registerForPushPushNotifications = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const notToken = (await Notifications.getExpoPushTokenAsync()).data;
      postNotificationToken(notToken);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  };

  useEffect(() => {
    getToken();
    getBarCodePermissions();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  useEffect(() => {
    getCardData();
    getFollowingData();
    registerForPushPushNotifications();
  }, [token]);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleOpenQr = (id) => {
    setCardId(id);
    setOpenModal(true);
  }

  async function writeNdef(value) {
    let result = false;

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);
      alert("Started NFC Write");

      if (bytes) {
        await NfcManager.ndefHandler
          .writeNdefMessage(bytes);
        result = true;
      }
    } catch (ex) {
      alert(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }

    alert(result);
  }

  //foregrounded notifications
  const handleNotification = (notification: Notifications.Notification) => {

  }

  //response after tap
  const handleNotificationResponse = (notification: Notifications.Notification) => {

  }

  const renderItems = ({ item }) => {
    return (
      <View>
        <CardComponent
          name={item.name}
          profession={item.profession}
          description={"tap for QR | hold for NFC"}
          width={vw100}
          height={vw60}
          normal={false}
          category={item.category}
          onPress={() => handleOpenQr(item._id)}
          onHold={() => writeNdef(item._id)}
        />
      </View>
    );
  }

  return (
    <View style={styles().container}>

      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <View style={styles().upperHalf}>

        <Text style={styles("0", "Poppins-Bold").header}>Home</Text>

        <Text style={styles("Poppins-Medium").subHeader}>Your Cards</Text>

        <Carousel
          style={{ marginTop: -20, marginBottom: -20 }}
          loop={false}
          width={vw100}
          data={cardData}
          renderItem={renderItems}
          mode={"parallax"}
        />

      </View>
      <View style={styles().lowerHalf}>

        <View style={styles().search}>
          <InputField
            placeholder={"Search"}
            value={searchText}
            setValue={setSearchText}
          />
        </View>

        <View style={styles().suggestedView}>
          <Text style={styles("Poppins-Medium").suggestedHeader}>Suggested</Text>

          <View style={styles().profiles}>
            <FlatList
              data={profData}
              renderItem={({ item }) =>
                <View style={styles().profile}>
                  <ProfileComponent
                    name={item.name}
                    profession={item.profession}
                    dark={false}
                  />
                </View>
              }
            />
          </View>
        </View>

      </View>

      <ModalComponent
        title={"Recents"}
        content={profData}
        height={vh53}
      />

      <Modal visible={openModal}>
        <View style={styles().modal}>
          <QRCode
            value={cardId}
            logo={appLogo}
            size={200}
          />
          <TouchableOpacity
            style={styles().cancelButton}
            onPress={() => setOpenModal(false)}
          >
            <Text style={{ color: colors.white }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <StatusBar style="light" />

    </View>
  )
}
