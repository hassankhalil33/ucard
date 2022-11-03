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

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <>
      <View style={styles().default}>
        <Text style={styles().header}>Recents</Text>
        <TouchableOpacity style={{ width: 24, height: 12 }} onPress={onOpen}>
          <Image source={arrowUp} style={{ width: 12, height: 6 }} />
        </TouchableOpacity>
      </View>

      <Modalize modalStyle={styles().modal} ref={modalizeRef}>
        <View style={styles().default}>

          <Text style={styles().header}>Inside Recents</Text>
          <TouchableOpacity style={{ width: 24, height: 12 }} onPress={onClose}>
            <Image source={arrowDown} style={{ width: 12, height: 6 }} />
          </TouchableOpacity>

        </View>
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
  },

  modal: {
    paddingTop: "6%",
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 27,
  }
});

export default ModalComponent
