import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../utilities/axios";

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
  postCreateCard: Function;
  deleteCard: Function;
  putCard: Function;
  postRegister: Function;
  postLogin: Function;
  logged: boolean;
  setLogged: Function;
  postNotificationToken: Function;
}

export const UserContext = createContext({} as UserProviderStore);

export const UserProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [token, setToken] = useState("");
  const [logged, setLogged] = useState(false);

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

  const postRegister = async (data) => {
    try {
      const response = await axios.post("/auth/register", data);
      console.log(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const postLogin = async (data) => {
    try {
      const response = await axios.post("/auth/login", data);
      console.log(response.data);
      return response.data;

    } catch (err) {
      console.log(err);
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

  const postFollowingData = async (data) => {
    try {
      const response = await axios.post("/user/follow",
        data,
        {
          headers: { Authorization: "Bearer " + token }
        });
      console.log(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const postNotificationToken = async (notToken) => {
    try {
      const response = await axios.post("/user/notifications",
        {
          notification_token: notToken
        },
        {
          headers: { Authorization: "Bearer " + token }
        });
      console.log(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const postCreateCard = async () => {
    try {
      const response = await axios.post("/card",
        {
          null: null
        },
        {
          headers: { Authorization: "Bearer " + token }
        });
      console.log(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const putCard = async (cardId, updateData) => {
    try {
      const response = await axios.put("/card",
        updateData,
        {
          headers: { Authorization: "Bearer " + token },
        });
      console.log(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const deleteCard = async (cardId) => {
    try {
      const response = await axios.delete("/card", {
        headers: {
          Authorization: "Bearer " + token
        },
        data: {
          id: cardId
        }
      });
      console.log(response.data);

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
    getFollowingData,
    postFollowingData,
    postCreateCard,
    deleteCard,
    putCard,
    postRegister,
    postLogin,
    logged,
    setLogged,
    postNotificationToken
  };

  return (
    <UserContext.Provider value={allData}>
      {children}
    </UserContext.Provider>
  )
}
