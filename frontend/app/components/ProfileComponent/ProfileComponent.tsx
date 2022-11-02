import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';

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

  return (
    <View style={styles(width).container}>
      <View style={styles().image}>
        <Image source={photo} />
      </View>

      <View style={{ flexDirection: "row", height: 60 }}>
        <View style={{ height: 60 }}>
          <Text>{name}</Text>
          <Text>{profession}</Text>
        </View>
        <View style={{ height: 60 }}>
          <Text>{timestamp}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = (width = 370) => StyleSheet.create({
  container: {
    height: 60,
    width: width,
    flexDirection: "row"
  },

  image: {
    width: 60,
    height: 60
  }
})

export default ProfileComponent
