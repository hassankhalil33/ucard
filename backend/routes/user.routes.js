const {Router} = require('express');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();
const {
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
} = require('../controllers/user.controller');


router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);
router.delete('/', userMiddleware, deleteUser);

// CREATE ALGOS FOR SUGGESTED AND NOTIFICATIONS
// SUGGESTED AND NOTIFICATIONS EVERY 15 MINS (node-schedule)
// USE FCM (FireBase) TO SEND PUSH NOTIFICATIONS
router.get('/suggested', userMiddleware, getSuggested);
router.get('/notification', userMiddleware, getNotifications);
router.delete('/notification', userMiddleware, deleteNotifications);
router.post('/notification', userMiddleware, postNotificationToken);

router.get('/follow', userMiddleware, getFollowing);
router.post('/follow', userMiddleware, followCard);
router.delete('/follow', userMiddleware, unfollowCard);

module.exports = router;
