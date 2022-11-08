import React, { useEffect, useContext, useState } from "react";
import { Text, View, Image, FlatList, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import styles from "./styles";
import Carousel from "react-native-reanimated-carousel";
import CardComponent from "../../components/CardComponent/CardComponent";
import InputField from "../../components/InputField/InputField";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import profData from "../../constants/profileData";
const background = require("../../assets/background.png");

const vh53 = (Dimensions.get('window').height / 10) * 5.3;
const vw60 = (Dimensions.get('window').width / 10) * 6;
const vw100 = (Dimensions.get('window').width / 10) * 10;


export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  const {
    cardData,
    token,
    getToken,
    getCardData,
    getFollowingData
  } = useContext(UserContext);

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getCardData();
    getFollowingData();
  }, [token]);

  const renderItems = ({ item }) => {
    return (
      <View>
        <CardComponent
          name={item.name}
          profession={item.profession}
          description={"hold for NFC share"}
          width={vw100}
          height={vw60}
          normal={false}
          category={item.category}
        />
      </View>
    );
  }

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

      <StatusBar style="light" />
    </View>
  )
}
