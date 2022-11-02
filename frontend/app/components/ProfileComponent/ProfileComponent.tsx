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
    <View>
      <View>
        <Image source={photo} />
      </View>

      <View>
        <View>
          <Text>{name}</Text>
          <Text>{profession}</Text>
        </View>
        <View>
          <Text>{timestamp}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileComponent
