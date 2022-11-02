import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';

interface ProfileComponentProps {
  name: string,
  profession: string,
  photo?: any,
  timestamp?: string
}

const ProfileComponent: FC<ProfileComponentProps> = (props) => {
  return (
    <Text>Im Profile</Text>
  )
}

export default ProfileComponent
