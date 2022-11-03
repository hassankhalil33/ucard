import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import WelcomeStackScreen from "./app/routes/WelcomeStack";
import TabNavigationScreen from "./app/routes/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigationScreen />
    </NavigationContainer>
  )
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <WelcomeStackScreen />
//     </NavigationContainer>
//   );
// }
