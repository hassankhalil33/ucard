import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserProvider } from "./app/contexts/UserContext";
import NavigationSwitcher from "./app/routes/NavigationSwitcher";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <NavigationContainer>
          <NavigationSwitcher />
        </NavigationContainer>
      </UserProvider>
    </GestureHandlerRootView>
  )
}
