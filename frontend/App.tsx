import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import WelcomeStackScreen from "./app/routes/welcomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeStackScreen />
    </NavigationContainer>
  );
}
