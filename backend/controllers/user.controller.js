const User = require("../models/user.model");
const Card = require("../models/card.model");

const getUser = async (req, res) => {
  const {email} = req.user;
  const user = await User.find({email});

  res.json(user);
}

module.exports = {
  getUser
}
