import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserContext from "./app/utilities/UserContext";
import WelcomeStackScreen from "./app/routes/WelcomeStack";
import TabNavigationScreen from "./app/routes/TabNavigation";

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const allData = { cardData, setCardData, followingData, setFollowingData };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserContext.Provider value={allData}>
        <NavigationContainer>
          <TabNavigationScreen />
        </NavigationContainer>
      </UserContext.Provider>
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
