import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigationScreen from "./app/routes/TabNavigation";
import { UserProvider } from "./app/utilities/UserContext";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <NavigationContainer>
          <TabNavigationScreen />
        </NavigationContainer>
      </UserProvider>
    </GestureHandlerRootView>
  )
}

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <WelcomeStackScreen />
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }
