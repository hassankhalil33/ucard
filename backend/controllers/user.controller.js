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

const getRecent = async (req, res) => {
  const {_id: id} = req.user; //maybe de8ri use the req.user instead of sending new req
  const user = await User.findById(id).populate("following");

  res.json(user.following)
}

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getSuggested,
  getRecent
}
