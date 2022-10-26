const User = require("../models/user.model");
const Card = require("../models/card.model");


const getUser = (req, res) => {
  const user = req.user;

  res.json(user);
}

const updateUser = async (req, res) => {
  const {_id: id} = req.user;
  const {name, location} = req.body;

  await User.findByIdAndUpdate(id, {
    name: name,
    location: location
  });
  
  res.json({message: "success"})
}

const deleteUser = async (req, res) => {
  const {_id: id} = req.user;
  await User.findByIdAndDelete(id);

  res.json({message: "success"})
}

const getSuggested = async (req, res) => {
  const {_id: id} = req.user; //maybe de8ri use the req.user instead of sending new req
  const user = await User.findById(id).populate("suggested");

  res.json(user.suggested)
}

const getFollowing = async (req, res) => {
  const {_id: id} = req.user; //maybe de8ri use the req.user instead of sending new req
  const user = await User.findById(id).populate("following");

  res.json(user.following)
}

const followCard = async (req, res) => {
  const {id: follow_id} = req.body
  const {_id: id} = req.user;

  await User.findByIdAndUpdate(id, {
    following: [follow_id]
  });

  res.json({message: "success"})
}

const unfollowCard = async (req, res) => {
  const {id: follow_id} = req.body
  const {_id: id, following} = req.user;

  await User.findByIdAndUpdate(id, {
    following: following.filter((follow) => {
      return follow != follow_id
    })
  });

  res.json({message: "success"})
}

const getNotifications = async (req, res) => {
  const {notifications} = req.user;

  res.json(notifications)
}

const deleteNotifications = async (req, res) => {
  const {_id: id} = req.user;

  try {
    await User.findByIdAndUpdate(id, {
      notifications: []
    })
  } catch (error) {
    res.json(error);
    return
  }
  
  res.json({message: "success"})
}

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getSuggested,
  getFollowing,
  followCard,
  unfollowCard,
  getNotifications,
  deleteNotifications
}
