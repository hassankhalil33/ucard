import React, { useRef, FC } from 'react';
import { BASE_URL } from "@env";
import { Modalize } from 'react-native-modalize';
import { useFonts } from 'expo-font';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import colors from "../../constants/pallete";
import styles from './styles';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import MyButton from '../MyButton/MyButton';
import UpdateForm from '../UpdateForm/UpdateForm';
import * as ImagePicker from 'expo-image-picker';

const arrowUp = require("../../assets/arrows/arrow-up.png");
const arrowDown = require("../../assets/arrows/arrow-down.png");
const profileBig = require("../../assets/profile-big.png");
const imageFolder = BASE_URL + "/images/";

interface ModalComponentProps {
  title?: string;
  content: any;
  height?: number;
  defHeight?: string;
  cardScreen?: boolean;
  updateCard?: Function;
  deleteCard?: Function;
  updatePhoto?: Function;
}

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const { title, content, height, cardScreen, updateCard, deleteCard } = props;

  const modalizeRef = useRef<Modalize>(null);

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

  const pickImage = async (content) => {
    type resultType = {
      base64: string;
      cancelled: boolean;
      uri: string;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true
    }) as resultType;

    if (!result.cancelled) {
      content.setCardPhoto(result.uri);
      content.setImageBase64(result.base64);
    }
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

        <Image
          style={styles().image}
          source={content.cardPhoto ?
            { uri: content.cardPhoto + '?' + new Date() }
            : profileBig}
        />
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
          <TouchableOpacity onPress={() => pickImage(content)}>
            <Image
              style={styles().image}
              source={content.cardPhoto ?
                { uri: content.cardPhoto + '?' + new Date() }
                : profileBig}
            />
          </TouchableOpacity>
        }

        <View style={{ paddingBottom: "20%", marginTop: cardScreen && "8%" }}>
          {cardScreen ?
            <UpdateForm
              content={content}
            />
            :
            <View style={{ marginTop: "-20%" }}>
              {content.map((item, index) => {
                return (
                  <ProfileComponent
                    key={index}
                    name={item.card_id.name}
                    profession={"Followed On:"}
                    timestamp={item.timestamp.slice(5, 10) + " " + item.timestamp.slice(11, 16)}
                    dark={true}
                    margin={20}
                    photo={item.card_id.photo && imageFolder + item.card_id.photo + ".png"}
                  />
                )
              })}
            </View>
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
