import React, { useContext } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { UserContext } from "../../contexts/UserContext";
import colors from "../../constants/pallete";
import styles from "./styles";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import MyButton from "../../components/MyButton/MyButton";
const background = require("../../assets/background.png");

export default function NotificationsScreen() {
  const { notifications, deleteNotifications, getNotifications } = useContext(UserContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleDeleteNotifications = async () => {
    await deleteNotifications();
    getNotifications();
  }

  const renderItems = ({ item }) => {
    return (
      <View style={styles().profile}>
        <ProfileComponent
          name={item.card_id.name}
          profession={"You Matched!"}
          dark={true}
          timestamp={item.timestamp.slice(11, 16)}
        />
      </View>
    )
  }

  return (
    <View style={styles().container}>

      <View style={styles().background}>
        <Image style={styles().backgroundImage} source={background} />
      </View>

      <Text style={styles("Poppins-Bold").header}>Notifications</Text>

      <View style={styles().innerContainer}>
        <FlatList
          data={notifications}
          renderItem={renderItems}
        />

        <View style={styles().button}>
          <MyButton
            title={"Delete Notifications"}
            color={colors.primary}
            press={handleDeleteNotifications}
          />
        </View>

      </View>

      <StatusBar style="light" />
    </View>
  )
}
