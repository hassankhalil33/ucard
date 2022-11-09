import axios from "../utilities/axios";

const getCardData = async (token, setCardData) => {
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

const getFollowingData = async (token, setFollowingData) => {
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

export {
  getCardData,
  getFollowingData
}
