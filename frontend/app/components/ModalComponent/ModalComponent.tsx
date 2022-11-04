import React, { useRef, FC } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Modalize } from 'react-native-modalize';
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
const arrowUp = require("../../assets/arrows/arrow-up.png");
const arrowDown = require("../../assets/arrows/arrow-down.png");

const vh40 = (Dimensions.get('window').height / 10) * 4.7;
const vw100 = (Dimensions.get('window').width / 10) * 10;

interface ModalComponentProps {
  title?: string,
  content: any
}

const ModalComponent: FC<ModalComponentProps> = ({ title, content }) => {
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
      <View style={styles().default}>
        <Text style={styles().header}>Recents</Text>
        <TouchableOpacity style={{ padding: 20 }} onPress={onOpen}>
          <Image source={arrowUp} style={{ width: 12, height: 6 }} />
        </TouchableOpacity>
      </View>

      <Modalize
        withHandle={false}
        modalStyle={styles().modal}
        modalHeight={vh40}
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

        <View style={{ paddingBottom: "20%" }}>
          {content.map((item, index) => {
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
          })}
        </View>
      </Modalize>
    </>
  );
};

const styles = () => StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: "4%",
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 10,
    height: "12%"
  },

  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "4%",
    backgroundColor: colors.white,
    width: "100%",
    height: "12%"
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
});

export default ModalComponent
