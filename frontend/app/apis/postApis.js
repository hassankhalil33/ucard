import axios from "../utilities/axios";

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

const postCreateCard = async () => {
  try {
    const response = await axios.post("/card",
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
