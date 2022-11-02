import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, Dimensions } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import CardComponent from "../../components/CardComponent/CardComponent";
import InputField from "../../components/InputField/InputField";
const background = require("../../assets/background.png");
const cardLogoBlue = require("../../assets/icons/IconWhiteonBlue.png");
const cardLogoOrange = require("../../assets/icons/IconWhiteonOrange.png");

const vw5 = (Dimensions.get('window').width / 10) * 0.5;
const vw10 = (Dimensions.get('window').width / 10) * 1;
const vw485 = (Dimensions.get('window').width / 10) * 4.85;
const vw60 = (Dimensions.get('window').width / 10) * 6;
const vw80 = (Dimensions.get('window').width / 10) * 8;
const vw100 = (Dimensions.get('window').width / 10) * 10;


export default function HomeScreen(props) {
  const cardData = [
    {
      color: colors.blue,
      name: "Hassan Khalil",
      profession: "Web Developer",
      description: "Tap to Share",
      logo: cardLogoBlue
    },

    {
      color: colors.orange,
      name: "LambdaTiger",
      profession: "CS: Global Offensive",
      description: "Tap to Share",
      logo: cardLogoOrange
    },

    {
      color: colors.blue,
      name: "Hassan Khalil",
      profession: "CEO of Google",
      description: "Tap to Share",
      logo: cardLogoBlue
    }
  ]

  const profData = [
    {
      name: "Charbel Maroun",
      profession: "Web Developer"
    },

    {
      name: "Charbel Maroun",
      profession: "Web Developer"
    },

    {
      name: "Charbel Maroun",
      profession: "Web Developer"
    }
  ]

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

      <Text style={styles.header}>Home</Text>

      <Text style={styles.subHeader}>Your Cards</Text>

      <FlatList
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
      />

      <View style={styles.search}>
        <InputField placeholder={"Search"} />
      </View>

      <View style={styles.suggestedView}>
        <Text style={styles.suggestedHeader}>Suggested</Text>

        {/* <FlatList
          data={cardData}
        /> */}

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

  subHeader: {
    alignSelf: "flex-start",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 10
  },

  carousel: {
  },

  card: {
  },

  search: {
    width: "80%"
  },

  suggestedView: {
    backgroundColor: colors.primary_light,
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  }
});
