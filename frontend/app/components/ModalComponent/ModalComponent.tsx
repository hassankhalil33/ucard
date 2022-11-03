import React, { useRef, FC } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';
const arrowUp = require("../../assets/arrows/arrow-up.png");
const arrowDown = require("../../assets/arrows/arrow-down.png");

interface ModalComponentProps {
  title?: string,
}

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const modalizeRef = useRef<Modalize>(null);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <View style={styles().default}>
        <Text style={styles().header}>Recents</Text>
        <TouchableOpacity onPress={onOpen}>
          <Image source={arrowUp} style={{ width: 12, height: 6 }} />
        </TouchableOpacity>
      </View>

      <Modalize
        ref={modalizeRef}
      >
        <Text>I'm The Modalize</Text>
      </Modalize>
    </>
  );
};

const styles = () => StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  header: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    lineHeight: 30,
    color: colors.blue
  }
});

export default ModalComponent
