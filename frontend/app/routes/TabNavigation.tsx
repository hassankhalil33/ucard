import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
const appIcon = require("../assets/navigation/icon.png");
const homeIcon = require("../assets/navigation/home.png");
const homeIconFocused = require("../assets/navigation/home-focused.png");
const notificationsIcon = require("../assets/navigation/notifications.png");
const notificationsIconFocused = require("../assets/navigation/notifications-focused.png");
const contactsIcon = require("../assets/navigation/contacts.png");
const contactsIconFocused = require("../assets/navigation/contacts-focused.png");
const cardsIcon = require("../assets/navigation/cards.png");
const cardsIconFocused = require("../assets/navigation/cards-focused.png");

const TabNavigation = createBottomTabNavigator();
const TabNavigationScreen = ({ navigation }) => {
  return (
    <TabNavigation.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "7%",
          padding: 0,
          margin: 0,
          justifyContent: "center",
          alignItems: "center"
        },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = !focused ? homeIcon : homeIconFocused
          } else if (route.name === "notifications") {
            iconName = !focused ? notificationsIcon : notificationsIconFocused
          } else if (route.name === "home2") {
            iconName = appIcon
          } else if (route.name === "contacts") {
            iconName = !focused ? contactsIcon : contactsIconFocused
          } else if (route.name === "cards") {
            iconName = !focused ? cardsIcon : cardsIconFocused
          }

          return route.name != "home2" ?
            <Image
              source={iconName}
              style={{
                width: "76%",
                height: "68%"
              }}
            /> :
            <TouchableOpacity>
              <Image
                source={iconName}
                style={{
                  width: 50,
                  height: 50
                }}
              />
            </TouchableOpacity>
        }
      })}
    >

      <TabNavigation.Screen
        name={"home"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"notifications"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"home2"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"contacts"}
        component={HomeScreen}
      />
      <TabNavigation.Screen
        name={"cards"}
        component={HomeScreen}
      />

    </TabNavigation.Navigator>
  )
}

export default TabNavigationScreen
