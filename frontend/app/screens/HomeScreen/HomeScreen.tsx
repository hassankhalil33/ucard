import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, Dimensions } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import CardComponent from "../../components/CardComponent/CardComponent";
const background = require("../../assets/background.png");

const vw5 = (Dimensions.get('window').width / 10) * 0.5;
const vw10 = (Dimensions.get('window').width / 10) * 1;
const vw80 = (Dimensions.get('window').width / 10) * 8;
const vw485 = (Dimensions.get('window').width / 10) * 4.85;

export default function HomeScreen(props) {
  const exData = [
    {
      color: colors.blue,
      name: "Hassan Khalil",
      profession: "Web Developer",
      description: "Tap to Share"
    },

    {
      color: colors.orange,
      name: "LambdaTiger",
      profession: "CS: Global Offensive",
      description: "Tap to Share"
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

      <FlatList
        style={styles.carousel}
        data={exData}
        renderItem={({ item }) =>
          <View style={styles.card}>
            <CardComponent
              color={item.color}
              name={item.name}
              profession={item.profession}
              description={item.description}
              width={vw80}
              height={vw485}
              normal={false}
            />
          </View>
        }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
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

  carousel: {
    width: "100%",
    marginLeft: vw5,
    marginRight: vw5,
  },

  card: {
    padding: vw5
  }
});
