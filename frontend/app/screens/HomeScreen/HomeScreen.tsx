import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, Dimensions } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import axios from "../../utilities/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carousel from "react-native-reanimated-carousel";
import CardComponent from "../../components/CardComponent/CardComponent";
import InputField from "../../components/InputField/InputField";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import cardData from "../../constants/cardData";
import profData from "../../constants/profileData";
const background = require("../../assets/background.png");

const vw5 = (Dimensions.get('window').width / 10) * 0.5;
const vw10 = (Dimensions.get('window').width / 10) * 1;
const vw485 = (Dimensions.get('window').width / 10) * 4.85;
const vh15 = (Dimensions.get('window').height / 10) * 1.5;
const vh40 = (Dimensions.get('window').height / 10) * 4;
const vh6 = (Dimensions.get('window').height / 10) * 0.6;
const vh50 = (Dimensions.get('window').height / 10) * 5;
const vh53 = (Dimensions.get('window').height / 10) * 5.3;
const vw60 = (Dimensions.get('window').width / 10) * 6;
const vw80 = (Dimensions.get('window').width / 10) * 8;
const vw100 = (Dimensions.get('window').width / 10) * 10;


export default function HomeScreen(props) {
  const [token, setToken] = useState("");

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");

      if (value !== null) {
        setToken(value);
        alert(getCardData());
      }
    } catch (e) {
      console.log(e);
    }
  }

  const getCardData = async () => {
    try {
      const response = await axios.get("/card", {
        headers: { Authorization: "Bearer " + token }
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  getToken();

  const renderItems = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <CardComponent
          color={item.color}
          name={item.name}
          profession={item.profession}
          description={item.description}
          width={vw100}
          height={vw60}
          normal={false}
          logo={item.logo}
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
    <View style={styles.container}>

      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={background} />
      </View>

      <View style={styles.upperHalf}>

        <Text style={styles.header}>Home</Text>

        <Text style={styles.subHeader}>Your Cards</Text>

        {/* <FlatList
          style={styles.carousel}
          data={cardData}
          renderItem={({ item }) =>
            <View style={styles.card}>
              <CardComponent
                color={item.color}
                name={item.name}
                profession={item.profession}
                description={item.description}
                width={vw100}
                height={vw60}
                normal={false}
                logo={item.logo}
              />
            </View>
          }
          horizontal
          pagingEnabled
        /> */}

        <Carousel
          style={{ marginTop: -20, marginBottom: -20 }}
          loop={false}
          width={vw100}
          data={cardData}
          renderItem={renderItems}
          mode={"parallax"}
        />

      </View>
      <View style={styles.lowerHalf}>

        <View style={styles.search}>
          <InputField placeholder={"Search"} />
        </View>

        <View style={styles.suggestedView}>
          <Text style={styles.suggestedHeader}>Suggested</Text>

          <View style={styles.profiles}>
            <FlatList
              data={profData}
              renderItem={({ item }) =>
                <View style={styles.profile}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column"
  },

  upperHalf: {
    width: "100%",
    height: "47%",
    alignItems: "center",
  },

  lowerHalf: {
    width: "100%",
    height: "44%",
    alignItems: "center",
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

  subHeader: {
    alignSelf: "flex-start",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    marginLeft: 30,
    marginTop: 20,
  },

  carousel: {
  },

  card: {
  },

  search: {
    paddingTop: "3%",
    width: "80%"
  },

  suggestedView: {
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: colors.primary_light,
    width: "90%",
    height: "100%",
    padding: vw5
  },

  suggestedHeader: {
    alignSelf: "flex-start",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    lineHeight: 30,
    color: colors.blue,
  },

  profiles: {
    marginTop: 15,
    paddingBottom: "31%"
  },

  profile: {
    marginTop: 15,
  },
});
