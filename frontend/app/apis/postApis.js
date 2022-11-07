import axios from "../utilities/axios";

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

export {
  postFollowingData
}
