const {Router} = require('express');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();
const {
  getUser,
  updateUser,
  deleteUser,
  getSuggested,
  getFollowing,
  followCard
} = require('../controllers/user.controller');


router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);
router.delete('/', userMiddleware, deleteUser);

router.get('/suggested', userMiddleware, getSuggested);
// router.get('/notification', userMiddleware, getNotification);
// router.delete('/notification', userMiddleware, deleteNotification);

router.get('/following', userMiddleware, getFollowing);
router.post('/following', userMiddleware, followCard);

module.exports = router;
