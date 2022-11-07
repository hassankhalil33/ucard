import axios from "../utilities/axios";

const postFollowingData = async (token, data) => {
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

const postCreateCard = async (token) => {
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

export {
  postFollowingData,
  postCreateCard
}
