import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "./axios";

interface UserProviderStore {
  cardData: object[];
  setCardData: Function;
  followingData: object[];
  setFollowingData: Function;
  token: string;
  setToken: Function;
  getToken: Function;
  getCardData: Function;
  getFollowingData: Function;
}

export const UserContext = createContext({} as UserProviderStore);

export const UserProvider = ({ children }) => {
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

  const postFollowingData = async (data) => {
    try {
      const response = await axios.post("/user/follow",
        data,
        {
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
    <UserContext.Provider value={allData}>
      {children}
    </UserContext.Provider>
  )
}
