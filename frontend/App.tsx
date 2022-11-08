import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigationScreen from "./app/routes/TabNavigation";
import WelcomeStackScreen from "./app/routes/WelcomeStack";
import { UserProvider } from "./app/contexts/UserContext";

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <UserProvider>
//         <NavigationContainer>
//           <TabNavigationScreen />
//         </NavigationContainer>
//       </UserProvider>
//     </GestureHandlerRootView>
//   )
// }

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <NavigationContainer>
          <WelcomeStackScreen />
        </NavigationContainer>
      </UserProvider>
    </GestureHandlerRootView>
  );
}
