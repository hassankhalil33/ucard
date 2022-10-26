const User = require("../models/user.model");
const Card = require("../models/card.model");


const getAllCards = async (req, res) => {
  const {_id: id} = req.user;
  const user = await User.findById(id).populate(cards);

  res.json(user.cards);
}

const getCard = async (req, res) => {
  const {id} = req.params;
  const card = await Card.findById(id);

  res.json(card);
}

const createCard = async (req, res) => {

}

const updateCard = async (req, res) => {

}

const deleteCard = async (req, res) => {

}

module.exports = {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
}
