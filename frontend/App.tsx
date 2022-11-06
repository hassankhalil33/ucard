import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserContext from "./app/utilities/UserContext";
import axios from "./app/utilities/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WelcomeStackScreen from "./app/routes/WelcomeStack";
import TabNavigationScreen from "./app/routes/TabNavigation";

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [token, setToken] = useState("");

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");

      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const getCardData = async () => {
    try {
      const response = await axios.get("/card", {
        headers: { Authorization: "Bearer " + token }
      });

      console.log(response.data);
      setCardData(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const getFollowingData = async () => {
    try {
      const response = await axios.get("/user/follow", {
        headers: { Authorization: "Bearer " + token }
      });

      console.log(response.data);
      setFollowingData(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const allData = {
    cardData,
    setCardData,
    followingData,
    setFollowingData,
    token,
    setToken,
    getToken,
    getCardData,
    getFollowingData
  };

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
