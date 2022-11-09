import React, { useRef, FC } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { TextInput } from "@react-native-material/core";
import { useFonts } from 'expo-font';
import colors from "../../constants/pallete";
import styles from './styles';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import MyButton from '../MyButton/MyButton';
const arrowUp = require("../../assets/arrows/arrow-up.png");
const arrowDown = require("../../assets/arrows/arrow-down.png");
const profileBig = require("../../assets/profile-big.png");

interface ModalComponentProps {
  title?: string;
  content: any;
  height?: number;
  defHeight?: string;
  cardScreen?: boolean;
  updateCard?: Function;
  deleteCard?: Function;
}

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const { title, content, height, cardScreen, updateCard, deleteCard } = props;

  const modalizeRef = useRef<Modalize>(null);

  console.log(content);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
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
      <View style={styles().container}>
        <View style={styles().default}>
          <Text style={styles("Poppins-Medium").header}>{title}</Text>
          <TouchableOpacity style={{ padding: 20 }} onPress={onOpen}>
            <Image source={arrowUp} style={{ width: 12, height: 6 }} />
          </TouchableOpacity>
        </View>

        <Image style={styles().image} source={profileBig} />
      </View>

      <Modalize
        withHandle={false}
        modalStyle={styles().modal}
        modalHeight={height}
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={styles().innerView}>
          <Text style={styles("Poppins-Medium").header}>{title}</Text>
          <TouchableOpacity style={{ padding: 20 }} onPress={onClose}>
            <Image source={arrowDown} style={{ width: 12, height: 6, }} />
          </TouchableOpacity>
        </View>

        {cardScreen &&
          <TouchableOpacity onPress={() => alert("Photo Updated!")}>
            <Image style={styles().image} source={profileBig} />
          </TouchableOpacity>
        }

        <View style={{ paddingBottom: "20%", marginTop: cardScreen && "8%" }}>
          {cardScreen ?
            <View>
              <TextInput
                style={{ marginBottom: 10 }}
                color={colors.blue}
                inputStyle={{ color: colors.primary }}
                variant="outlined"
                label={"Name"}
                value={content.cardName}
                onChangeText={(text) => content.setCardName(text)}
              />
              <TextInput
                style={{ marginBottom: 10 }}
                color={colors.blue}
                inputStyle={{ color: colors.primary }}
                variant="outlined"
                label={"Profession"}
                value={content.cardProf}
                onChangeText={(text) => content.setCardProf(text)}
              />
              <TextInput
                style={{ marginBottom: 10 }}
                color={colors.blue}
                inputStyle={{ color: colors.primary }}
                variant="outlined"
                label={"Email"}
                value={content.cardEmail}
                onChangeText={(text) => content.setCardEmail(text)}
              />
              <TextInput
                style={{ marginBottom: 10 }}
                color={colors.blue}
                inputStyle={{ color: colors.primary }}
                variant="outlined"
                label={"Link"}
                value={content.cardLink}
                onChangeText={(text) => content.setCardLink(text)}
              />
              <TextInput
                style={{ marginBottom: 10 }}
                color={colors.blue}
                inputStyle={{ color: colors.primary }}
                variant="outlined"
                label={"Location"}
                value={content.cardLocation}
                onChangeText={(text) => content.setCardLocation(text)}
              />
            </View>
            : content.map((item, index) => {
              return (
                <ProfileComponent
                  key={index}
                  name={item.name}
                  profession={item.profession}
                  timestamp={item.timestamp}
                  dark={true}
                  margin={20}
                />
              )
            })
          }
        </View>

        {cardScreen &&
          <View style={styles().button}>
            <MyButton
              title={"Update Card"}
              color={colors.primary}
              press={updateCard}
            />
          </View>
        }

        {cardScreen &&
          <View style={styles().button2}>
            <MyButton
              title={"Delete Card"}
              color={colors.primary}
              press={deleteCard}
            />
          </View>
        }

      </Modalize>
    </>
  );
};

export default ModalComponent
