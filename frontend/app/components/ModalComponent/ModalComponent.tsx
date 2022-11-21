import React, { useRef, FC } from 'react';
import { Modalize } from 'react-native-modalize';
import { useFonts } from 'expo-font';
import pickImage from '../../utilities/image_picker';
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
import { ListItem } from '@react-native-material/core';

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
          <TouchableOpacity onPress={content.setCardPhoto(pickImage())}>
            <Image style={styles().image} source={profileBig} />
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
