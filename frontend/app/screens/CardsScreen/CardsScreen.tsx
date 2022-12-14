import React, { useContext, useState, useEffect } from "react";
import { BASE_URL } from "@env";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./styles";
import viewPort from "../../constants/viewPortConstants";
import Carousel from "react-native-reanimated-carousel";
import CardComponent from "../../components/CardComponent/CardComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const background = require("../../assets/background.png");
const addButton = require("../../assets/buttons/add-button.png");
const imageFolder = BASE_URL + "/images/";

type cardDataType = {
  _id: string;
  name: string;
  profession: string;
  email: string;
  link: string;
  location: string;
  SetStateAction: Function;
  category: string;
  is_public: boolean;
  photo: string;
}


export default function CardsScreen() {
  const {
    cardData,
    postCreateCard,
    getCardData,
    deleteCard,
    putCard
  } = useContext(UserContext);

  const defaultCard = cardData[0] ? cardData[0] : {
    name: null,
    profession: null,
    email: null,
    link: null,
    location: null,
    category: "personal",
    is_public: false,
    photo: null
  }

  const [currentCard, setCurrentCard] = useState(defaultCard as cardDataType);
  const [cardName, setCardName] = useState(currentCard.name);
  const [cardProf, setCardProf] = useState(currentCard.profession);
  const [cardEmail, setCardEmail] = useState(currentCard.email);
  const [cardLink, setCardLink] = useState(currentCard.link);
  const [cardLocation, setCardLocation] = useState(currentCard.location);
  const [cardType, setCardType] = useState(currentCard.category);
  const [cardPublic, setCardPublic] = useState(currentCard.is_public);
  const [cardPhoto, setCardPhoto] = useState(currentCard.photo && imageFolder + currentCard.photo + ".png");
  const [imageBase64, setImageBase64] = useState("");

  const allUseStateData = {
    cardName, setCardName,
    cardProf, setCardProf,
    cardEmail, setCardEmail,
    cardLink, setCardLink,
    cardLocation, setCardLocation,
    cardType, setCardType,
    cardPublic, setCardPublic,
    cardPhoto, setCardPhoto,
    imageBase64, setImageBase64
  }

  useEffect(() => {
    setCardName(currentCard.name);
    setCardProf(currentCard.profession);
    setCardEmail(currentCard.email);
    setCardLink(currentCard.link);
    setCardLocation(currentCard.location);
    setCardType(currentCard.category);
    setCardPublic(currentCard.is_public);
    setCardPhoto(currentCard.photo && imageFolder + currentCard.photo + ".png");
  }, [currentCard])

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleAddButton = async () => {
    await postCreateCard();
    getCardData();
    alert("New Card Added!");
  }

  const handleUpdateButton = async () => {
    const data = {
      id: currentCard._id,
      name: cardName,
      profession: cardProf,
      email: cardEmail,
      link: cardLink,
      location: cardLocation,
      category: cardType,
      is_public: cardPublic,
      photo: imageBase64
    }

    await putCard(currentCard._id, data);
    getCardData();
    alert("Card Updated!");
  }

  const handleDeleteButton = async () => {
    await deleteCard(currentCard._id);
    getCardData();
    alert("Card Deleted!");
  }

  const renderItems = ({ item }) => {
    return (
      <View>
        <CardComponent
          key={item._id}
          category={item.category}
          name={item.name}
          profession={item.profession}
          description={"hold to share"}
          width={viewPort.vw100}
          height={viewPort.vw60}
        />
      </View>
    );
  }

  return (
    <View style={styles().container}>

      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <Text style={styles("Poppins-Bold").header}>Cards</Text>

      <TouchableOpacity style={styles().addButtonContainer} onPress={handleAddButton}>
        <Image source={addButton} style={styles().addButton} />
      </TouchableOpacity>

      <View style={styles().upperHalf}>
        <Text style={styles("Poppins-Medium").subHeader}>Your Cards</Text>

        <Carousel
          style={{ marginTop: -20, marginBottom: -20 }}
          loop={false}
          width={viewPort.vw100}
          data={cardData}
          renderItem={renderItems}
          mode={"parallax"}
          onSnapToItem={async (index) => await setCurrentCard(cardData[index] as cardDataType)}
        />
      </View>

      <ModalComponent
        title={"Card Details"}
        content={allUseStateData}
        cardScreen={true}
        height={viewPort.vh165}
        updateCard={handleUpdateButton}
        deleteCard={handleDeleteButton}
      />

      <StatusBar style="light" />

    </View>
  )
}
