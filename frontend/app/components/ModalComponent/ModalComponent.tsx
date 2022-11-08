import React, { useRef, FC, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { TextInput } from "@react-native-material/core";
import { useFonts } from 'expo-font';
import colors from "../../constants/pallete";
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import MyButton from '../MyButton/MyButton';
import CardsScreen from '../../screens/CardsScreen/CardsScreen';
const arrowUp = require("../../assets/arrows/arrow-up.png");
const arrowDown = require("../../assets/arrows/arrow-down.png");
const profileBig = require("../../assets/profile-big.png");

const vh40 = (Dimensions.get('window').height / 10) * 4.7;
const vw100 = (Dimensions.get('window').width / 10) * 10;

interface ModalComponentProps {
  title?: string;
  content: any;
  height?: number;
  defHeight?: string;
  cardScreen?: boolean;
  value?: string;
  label?: string;
  updateCard?: Function;
  deleteCard?: Function;
}

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const { title, content, height, defHeight, cardScreen, value, label, updateCard, deleteCard } = props;
  const [thisValue, setThisValue] = useState("Beirut");

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

  // const renderItems = ({ item }) => {
  //   return (
  //     <>
  //       <View style={styles().default}>
  //         <Text style={styles().header}>Inside Recents</Text>
  //         <TouchableOpacity style={{ width: 24, height: 12 }} onPress={onClose}>
  //           <Image source={arrowDown} style={{ width: 12, height: 6 }} />
  //         </TouchableOpacity>
  //       </View>

  //       <View style={styles().profile}>
  //         <ProfileComponent
  //           name={item.name}
  //           profession={item.profession}
  //           dark={true}
  //         />
  //       </View>
  //     </>
  //   )
  // }

  return (
    <>
      <View style={styles(defHeight).container}>
        <View style={styles(defHeight).default}>
          <Text style={styles().header}>{title}</Text>
          <TouchableOpacity style={{ padding: 20 }} onPress={onOpen}>
            <Image source={arrowUp} style={{ width: 12, height: 6 }} />
          </TouchableOpacity>
        </View>

        <Image style={styles().image} source={profileBig} />
      </View>

      <Modalize
        withHandle={false}
        modalStyle={styles(defHeight, cardScreen).modal}
        modalHeight={height}
        ref={modalizeRef}

      // flatListProps={{
      //   data: profData,
      //   renderItem: renderItems,
      //   keyExtractor: (item, index) => "key" + index,
      //   showsVerticalScrollIndicator: false
      // }}
      >
        <View style={styles().innerView}>
          <Text style={styles().header}>{title}</Text>
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
                value={thisValue}
                onChangeText={(text) => setThisValue(text)}
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

const styles = (defHeight = "12%", cardScreen = false) => StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: "15%",
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 10,
  },

  default: {
    marginTop: "5%",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    width: "100%",
    height: "12%",
    marginBottom: "-10%"
  },

  header: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    lineHeight: 30,
    color: colors.blue
  },

  modal: {
    backgroundColor: colors.white,
    width: "100%",
    paddingTop: "6%",
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: "-5%"
  },

  profile: {
    marginTop: 15
  },

  image: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginBottom: 10
  },

  button: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    paddingBottom: "2%"
  },

  button2: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    paddingBottom: "25%"
  }
});

export default ModalComponent
