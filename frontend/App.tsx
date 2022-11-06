import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WelcomeStackScreen from "./app/routes/WelcomeStack";
import TabNavigationScreen from "./app/routes/TabNavigation";

export default function App() {
  const [cardData, setCardData] = useState([]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer>
        <TabNavigationScreen />
      </NavigationContainer>
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
