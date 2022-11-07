import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCardData, getFollowingData } from "../apis/getApis";
import { postFollowingData } from "../apis/postApis";

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
  postFollowingData: Function;
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

  const allData = {
    cardData,
    setCardData,
    followingData,
    setFollowingData,
    token,
    setToken,
    getToken,
    getCardData,
    getFollowingData,
    postFollowingData
  };

  return (
    <UserContext.Provider value={allData}>
      {children}
    </UserContext.Provider>
  )
}
