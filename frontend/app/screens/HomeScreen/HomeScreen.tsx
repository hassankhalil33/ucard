import React, { useEffect, useContext, useState } from "react";
import { BASE_URL } from "@env";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import { writeNdef } from "../../utilities/nfc";
import { getBarCodePermissions } from "../../utilities/qrcode";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  registerForPushPushNotifications,
  setNotificationHandler
} from "../../utilities/notifications";

import styles from "./styles";
import Carousel from "react-native-reanimated-carousel";
import CardComponent from "../../components/CardComponent/CardComponent";
import QRCodeModal from "../../components/QRCodeModal/QRCodeModal";
import InputField from "../../components/InputField/InputField";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import viewPort from "../../constants/viewPortConstants";

const background = require("../../assets/background.png");
const appLogo = require("../../assets/icon.png");
const logoutButton = require("../../assets/buttons/logout-button.png");
const imageFolder = BASE_URL + "/images/";


export default function HomeScreen() {
  const [cardId, setCardId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const {
    cardData,
    token,
    getToken,
    deleteToken,
    getCardData,
    getFollowingData,
    postNotificationToken,
    getNotifications,
    getSuggested,
    suggested,
    followingData,
    setLogged
  } = useContext(UserContext);

  const sendNotificationToken = async () => {
    const notToken = await registerForPushPushNotifications();
    if (notToken) {
      postNotificationToken(notToken);
    }
  }

  const searchSuggested = () => {
    const filteredArray = suggested.filter((item) => {
      const re = new RegExp(searchText.toString());
      return item.name.toLowerCase().match(re) && item
    })

    return filteredArray
  }

  useEffect(() => {
    getToken();
    getBarCodePermissions();
    setNotificationHandler();
  }, []);

  useEffect(() => {
    getCardData();
    getFollowingData();
    getNotifications();
    getSuggested();
    sendNotificationToken();
  }, [token]);

  const handleOpenQrButton = (id) => {
    setCardId(id);
    setOpenModal(true);
  }

  const handleLogout = async () => {
    await deleteToken();
    setLogged(false);
  }

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderCards = ({ item }) => {
    return (
      <View>
        <CardComponent
          name={item.name}
          profession={item.profession}
          description={"tap for QR | hold for NFC"}
          width={viewPort.vw100}
          height={viewPort.vw60}
          category={item.category}
          onPress={() => handleOpenQrButton(item._id)}
          onHold={() => writeNdef(item._id)}
        />
      </View>
    );
  }

  const renderSuggested = ({ item }) => {
    return (
      <View style={styles().profile}>
        <ProfileComponent
          name={item.name}
          profession={item.profession}
          dark={false}
          photo={item.photo && imageFolder + item.photo + ".png"}
        />
      </View>
    );
  }

  return (
    <View style={styles().container}>

      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <TouchableOpacity style={styles().addButtonContainer} onPress={handleLogout}>
        <Image source={logoutButton} style={styles().addButton} />
      </TouchableOpacity>

      <View style={styles().upperHalf}>

        <Text style={styles("0", "Poppins-Bold").header}>Home</Text>
        <Text style={styles("Poppins-Medium").subHeader}>Your Cards</Text>

        <Carousel
          style={{ marginTop: -20, marginBottom: -20 }}
          loop={false}
          width={viewPort.vw100}
          data={cardData}
          renderItem={renderCards}
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

          {suggested.length != 0 ?
            <View style={styles().profiles}>
              <FlatList
                data={searchText ? searchSuggested() : suggested}
                renderItem={renderSuggested}
              />
            </View>
            :
            <Text style={styles("Poppins-Medium").text}>No New Suggested Cards</Text>
          }
        </View>

      </View>

      <ModalComponent
        title={"Recents"}
        content={followingData}
        height={viewPort.vh53}
      />

      <QRCodeModal
        visibility={openModal}
        cardId={cardId}
        logo={appLogo}
        onCancel={() => setOpenModal(false)}
      />

      <StatusBar style="light" />

    </View>
  )
}
