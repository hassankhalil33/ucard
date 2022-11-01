import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const WelcomeStack = createNativeStackNavigator();
const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>

      <WelcomeStack.Screen
        name={"welcome"}
        component={WelcomeScreen}
      />
      <WelcomeStack.Screen
        name={"login"}
        component={LoginScreen}
      />

    </WelcomeStack.Navigator>
  )
}

export default WelcomeStackScreen
