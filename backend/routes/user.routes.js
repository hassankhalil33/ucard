const {Router} = require('express');
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


router.get('/', getUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

router.get('/suggested', getSuggested);
router.get('/notification', getNotifications);
router.delete('/notification', deleteNotifications);
router.post('/notification', postNotificationToken);

router.get('/follow', getFollowing);
router.post('/follow', followCard);
router.delete('/follow', unfollowCard);

module.exports = router;
