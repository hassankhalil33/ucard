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
  const {_id: id} = req.user;
  const user = await User.findById(id).populate("suggested");

  res.json(user.suggested)
}

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getSuggested
}
