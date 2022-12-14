const User = require("../models/user.model");
const Card = require("../models/card.model");
const schedule = require("node-schedule");
const { myNotifications } = require("../utility/notifications.utility");


//Will Run Every 15 Mins
const scheduledJob = schedule.scheduleJob("*/15 * * * *", async () => {
  //Update Suggested Every 15 mins
  const data = await User.find().populate("cards");
  const allCards = await Card.find();
  let allTokens = [];

  const matchUserCards = async () => {
    for await (const user of data) {
      for await (const card of user.cards) {
        const location = card.location;
        const profession = card.profession;
        const user_id = card.user_id
  
        for await (const card2 of allCards) {
          if ((card2.location === location) &&
          (card2.profession === profession) &&
          (card2.user_id.toString() != user_id.toString()) &&
          (!user.suggested.includes(card2._id)) &&
          (card2.is_public)) {
            const newSuggested = [card2._id, ...user.suggested];
            const newNotifications = [{card_id: card2._id}, ...user.notifications]
            await User.findByIdAndUpdate(user._id, {
              suggested: newSuggested,
              notifications: newNotifications
            })
  
            //Save Tokens of Users to send Notification
            allTokens = [...allTokens, user.notification_token.toString()];
          }
        };
      };
    };

    return allTokens;
  }

  const allUserTokens = await matchUserCards();
  //Send Notifications for Updated Users
  if (allUserTokens) {
    myNotifications(allUserTokens);
  }
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
}

const getSuggested = async (req, res) => {
  const {_id: id} = req.user;
  const user = await User.findById(id).populate("suggested");

  res.json(user.suggested)
}

const getFollowing = async (req, res) => {
  const {_id: id} = req.user;
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
  const {_id: id} = req.user;
  const user = await User.findById(id).populate({path: "notifications", populate: { path:  "card_id"}});

  res.json(user.notifications)
}

const postNotificationToken = async (req, res) => {
  const {_id: id} = req.user;
  const {notification_token: notToken} = req.body;

  await User.findByIdAndUpdate(id, {
    notification_token: notToken
  })

  res.json({message: "success"})
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
  deleteNotifications,
  postNotificationToken
}
