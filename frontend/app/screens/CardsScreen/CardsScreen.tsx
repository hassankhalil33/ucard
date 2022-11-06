import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import colors from "../../constants/pallete";
import Carousel from "react-native-reanimated-carousel";
import CardComponent from "../../components/CardComponent/CardComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import profData from "../../constants/profileData";
import inputData from "../../constants/inputData";
import CardContext from "../../utilities/UserContext";
const background = require("../../assets/background.png");
const addButton = require("../../assets/buttons/add-button.png");

const vw100 = (Dimensions.get('window').width / 10) * 10;
const vw60 = (Dimensions.get('window').width / 10) * 6;
const vh165 = (Dimensions.get('window').width / 10) * 16.5;

export default function CardsScreen(props) {
  const { cardData, setCardData } = useContext(CardContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderItems = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <CardComponent
          category={item.category}
          name={item.name}
          profession={item.profession}
          description={"hold to share"}
          width={vw100}
          height={vw60}
          normal={false}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={background} />
      </View>

      <Text style={styles.header}>Cards</Text>

      <TouchableOpacity style={styles.addButtonContainer} onPress={() => alert("New Card Added!")}>
        <Image source={addButton} style={styles.addButton} />
      </TouchableOpacity>

      <View style={styles.upperHalf}>
        <Text style={styles.subHeader}>Your Cards</Text>

        <Carousel
          style={{ marginTop: -20, marginBottom: -20 }}
          loop={false}
          width={vw100}
          data={cardData}
          renderItem={renderItems}
          mode={"parallax"}
        />
      </View>

      <ModalComponent
        title={"Card Details"}
        content={inputData}
        defHeight={"40%"}
        cardScreen={true}
        height={vh165}
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
    height: "50%",
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

  addButtonContainer: {
    position: "absolute",
    top: "10%",
    right: 40
  },

  addButton: {
    width: 30,
    height: 30.5,
  },

  card: {

  },

  subHeader: {
    alignSelf: "flex-start",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    marginLeft: 30,
    marginTop: "20%",
  },
})
