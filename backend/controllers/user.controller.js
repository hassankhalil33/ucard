const User = require("../models/user.model");
const Card = require("../models/card.model");
const schedule = require("node-schedule");


// Will Run Every 15 Mins
const scheduledJob = schedule.scheduleJob("*/10 * * * * *", async () => {
  // Update Suggested Every 15 mins
  const data = await User.find().populate("cards");
  const allCards = await Card.find();

  data.forEach(async user => {
    user.cards.forEach(card => {
      card_id = card._id;
      location = card.location;
      profession = card.profession;
      user_id = card.user_id

      allCards.forEach(async card2 => {
        if ((card2.location === location) &&
        (card2.profession === profession) &&
        (card2.user_id.toString() != user_id.toString()) &&
        (!user.suggested.includes(card_id))) {
          console.log(card2.user_id);
          console.log(id);
          const newSuggested = [card2._id, ...user.suggested];
          await User.findByIdAndUpdate(user._id, {
            suggested: newSuggested
          })
        }
      });
    });
  });

  console.log("Im Running");
})

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
  // ALSO DELETE ALL HIS CARDS
  // OR INSTEAD DISABLE ACCOUNT (TO SELL DATA LATER)
}

const getSuggested = async (req, res) => {
  const {_id: id} = req.user; //maybe de8ri use the req.user instead of sending new req
  const user = await User.findById(id).populate("suggested");

  res.json(user.suggested)
}

const getFollowing = async (req, res) => {
  const {_id: id} = req.user; //maybe de8ri use the req.user instead of sending new req
  const user = await User.findById(id).populate({path: "following", populate: { path:  "card_id"}});

  res.json(user.following)
}

const followCard = async (req, res) => {
  const {id: follow_id} = req.body
  const {_id: id, following} = req.user;

  await User.findByIdAndUpdate(id, {
    following: [...following, {card_id: follow_id}]
  });

  res.json({message: "success"})
}

const unfollowCard = async (req, res) => {
  const {id: unfollow_id} = req.body
  const {_id: id, following} = req.user;

  await User.findByIdAndUpdate(id, {
    following: following.filter((follow) => {
      return follow.card_id != unfollow_id
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
