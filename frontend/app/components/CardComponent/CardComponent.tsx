import React, { FC } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";
const cardLogoBlue = require("../../assets/icons/IconWhiteonBlue.png");
const cardLogoOrange = require("../../assets/icons/IconWhiteonOrange.png");

interface CardComponentProps {
  height?: number;
  width?: number;
  extraInfo?: boolean;
  name: string;
  link?: string;
  email?: string;
  profession: string;
  description: string;
  category: string;
  onPress?: Function;
  onHold?: Function;
}

const CardComponent: FC<CardComponentProps> = (props) => {
  const { height,
    width,
    name,
    profession,
    description,
    link,
    email,
    extraInfo = false,
    onHold,
    onPress,
    category = "PERSONAL",
  } = props;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableHighlight
      onPress={() => onPress && onPress()}
      onLongPress={() => onHold && onHold()}
    >
      <View style={styles("0", category, height, width).container}>
        <Text style={styles("Poppins-Regular").desc}>{description}</Text>

        {extraInfo &&
          <Text style={styles("Poppins-Medium", "0", 0, 0, extraInfo).prof}>{email}</Text>
        }
        {extraInfo &&
          <Text style={styles("Poppins-Medium", "0", 0, 0, extraInfo).prof}>{link}</Text>
        }

        <Text style={styles("Poppins-Medium", "0", 0, 0, extraInfo).prof}>{profession}</Text>
        <Text style={styles("Poppins-Medium").name}>{name}</Text>
        <Image
          style={styles().logo}
          source={category == "PERSONAL" ? cardLogoBlue : cardLogoOrange}
        />
      </View>
    </TouchableHighlight>
  )
}

export default CardComponent
