import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';
const darkPhoto = require("../../assets/profile_dark.png");
const lightPhoto = require("../../assets/profile_light.png");

interface ProfileComponentProps {
  name: string,
  profession: string,
  photo?: any,
  timestamp?: string,
  dark?: boolean,
  width?: number
}

const ProfileComponent: FC<ProfileComponentProps> = (props) => {
  const { name, profession, photo, timestamp, dark, width } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles(width).container}>
      <View style={styles().image}>
        <Image style={styles().image} source={photo ? photo : dark ? darkPhoto : lightPhoto} />
      </View>

      <View style={{ marginLeft: "5%", justifyContent: "center", height: 60 }}>
        <View style={{}}>
          <Text style={styles(width, dark).name}>{name}</Text>
        </View>
        <View style={{ width: "65%", flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles(width, dark).prof}>{profession}</Text>
          <Text style={styles(width, dark).time}>14:29</Text>
        </View>
      </View>
    </View>
  )
}

const styles = (width = 370, dark = false) => StyleSheet.create({
  container: {
    height: 60,
    width: width,
    flexDirection: "row"
  },

  image: {
    width: 60,
    height: 60
  },

  content: {
    justifyContent: "center",
    height: 60,
    paddingLeft: 15
  },

  name: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
    color: dark ? colors.primary : colors.white
  },

  prof: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: dark ? colors.primary : colors.white
  },

  time: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: dark ? colors.primary : colors.white
  }
})

export default ProfileComponent
