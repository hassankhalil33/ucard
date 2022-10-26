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
  deleteNotifications
} = require('../controllers/user.controller');


router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);
router.delete('/', userMiddleware, deleteUser);

router.get('/suggested', userMiddleware, getSuggested);
router.get('/notification', userMiddleware, getNotifications);
router.delete('/notification', userMiddleware, deleteNotifications);

router.get('/following', userMiddleware, getFollowing);
router.post('/following', userMiddleware, followCard);
router.delete('/following', userMiddleware, unfollowCard);

module.exports = router;
