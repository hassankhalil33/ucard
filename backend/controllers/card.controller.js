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
  const {_id: id, name, card_count, cards} = req.user;

  if (card_count >= 5) {
    res.status(403).json({message: "too many cards"})
  } else {
  const card = new Card;

  card.user_id = id;
  card.category = "personal";
  card.name = name;

  card.save();

  await User.findByIdAndUpdate(id, {
    card_count: card_count + 1,
    cards: [...cards, card._id]
  })

  res.json({message: "success"})
  }
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
