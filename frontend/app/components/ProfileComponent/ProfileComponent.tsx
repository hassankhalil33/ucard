import React, { FC } from "react";
import { Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';
import styles from "./styles";
const darkPhoto = require("../../assets/profile_dark.png");
const lightPhoto = require("../../assets/profile_light.png");

interface ProfileComponentProps {
  name: string,
  profession: string,
  photo?: string,
  timestamp?: string,
  dark?: boolean,
  width?: number,
  margin?: number
}

const ProfileComponent: FC<ProfileComponentProps> = (props) => {
  const { name, profession, photo, timestamp, dark, width, margin } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles(width, dark, margin).container}>
      <View style={styles().image}>
        <Image
          style={styles().image}
          source={photo ? { uri: photo + '?' + new Date() }
            : dark ? darkPhoto : lightPhoto}
        />
      </View>

      <View style={styles().content}>
        <View>
          <Text style={styles(width, dark, 0, "0", "Poppins-Bold").name}>{name}</Text>
        </View>
        <View style={styles().lowerText}>
          <Text style={styles(width, dark, 0, "Poppins-Regular").prof}>{profession}</Text>
          <Text style={styles(width, dark, 0, "Poppins-Regular").time}>{timestamp}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileComponent
