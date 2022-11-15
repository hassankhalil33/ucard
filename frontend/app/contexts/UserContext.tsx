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
  getNotifications: Function;
  notifications: object[];
  setNotifications: Function;
  deleteNotifications: Function;
  getSuggested: Function;
  suggested: object[];
  setSuggested: Function;
}

export const UserContext = createContext({} as UserProviderStore);

export const UserProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [suggested, setSuggested] = useState([]);
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

    } catch (err) {
      console.log(err);
    }
  }

  const postLogin = async (data) => {
    try {
      const response = await axios.post("/auth/login", data);
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
      setFollowingData(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const getNotifications = async () => {
    try {
      const response = await axios.get("/user/notification", {
        headers: { Authorization: "Bearer " + token }
      });
      setNotifications(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  const getSuggested = async () => {
    try {
      const response = await axios.get("/user/suggested", {
        headers: { Authorization: "Bearer " + token }
      });
      setSuggested(response.data);

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

    } catch (err) {
      console.log(err);
    }
  }

  const postNotificationToken = async (notToken) => {
    try {
      const response = await axios.post("/user/notification",
        {
          notification_token: notToken
        },
        {
          headers: { Authorization: "Bearer " + token }
        });

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

    } catch (err) {
      console.log(err);
    }
  }

  const deleteNotifications = async () => {
    try {
      const response = await axios.delete("/user/notification", {
        headers: {
          Authorization: "Bearer " + token
        },
        data: {
          null: null
        }
      });

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
    postNotificationToken,
    getNotifications,
    notifications,
    setNotifications,
    deleteNotifications,
    getSuggested,
    suggested,
    setSuggested
  };

  return (
    <UserContext.Provider value={allData}>
      {children}
    </UserContext.Provider>
  )
}
