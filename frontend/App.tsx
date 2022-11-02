import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import WelcomeStackScreen from "./app/routes/welcomeStack";
import HomeScreen from "./app/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <HomeScreen />
  )
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <WelcomeStackScreen />
//     </NavigationContainer>
//   );
// }
