const {Router} = require('express');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();
const {
  getUser,
  updateUser,
  deleteUser,
  getSuggested,
  getRecent
} = require('../controllers/user.controller')

router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);
router.delete('/', userMiddleware, deleteUser);

router.get('/suggested', userMiddleware, getSuggested);
router.get('/recent', userMiddleware, getRecent);

module.exports = router;
