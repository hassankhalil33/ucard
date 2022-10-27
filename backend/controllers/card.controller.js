const User = require("../models/user.model");
const Card = require("../models/card.model");


const getAllCards = async (req, res) => {
  const {_id: id} = req.user;
  const user = await User.findById(id).populate("cards");

  res.json(user.cards);
}

const getCard = async (req, res) => {
  const {id} = req.params;
  const card = await Card.findById(id);

  res.json(card);
}

const createCard = async (req, res) => {
  const {_id: id, name, card_count, cards, location} = req.user;

  if (!id) {
    res.status(400).json({message: "no id"});
    return
  }

  if (card_count >= 5) {
    res.status(403).json({message: "too many cards"});
    return
  }

  const card = new Card;

  card.user_id = id;
  card.category = "personal";
  card.name = name;
  card.location = location;

  card.save();

  await User.findByIdAndUpdate(id, {
    card_count: card_count + 1,
    cards: [...cards, card._id]
  })

  res.json({message: "success"})
}

const updateCard = async (req, res) => {
  const {id, category, name, profession, photo, email, link, is_public, location} = req.body;

  if (!id) {
    res.status(400).json({message: "no id"});
    return
  }

  await Card.findByIdAndUpdate(id, {
    category, name, profession, photo, email, link, is_public, location
  });

  res.json({message: "success"})
}

const deleteCard = async (req, res) => {
  const {_id: user_id, card_count, cards} = req.user;
  const {id} = req.body;

  if (!id) {
    res.status(400).json({message: "no id"});
    return
  }

  try {
    await Card.findByIdAndDelete(id);
  } catch (error) {
    res.json(error)
    return
  }

  await User.findByIdAndUpdate(user_id, {
    card_count: card_count - 1,
    cards: cards.filter((card) => {
      return card != id
    })
  })

  res.json({message: "success"})
}

module.exports = {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
}
