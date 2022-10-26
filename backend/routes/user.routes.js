const {Router} = require('express');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();
const {
  getUser,
  updateUser,
  deleteUser,
  getSuggested
} = require('../controllers/user.controller')

router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);
router.delete('/', userMiddleware, deleteUser);

router.get('/suggested', userMiddleware, getSuggested);

module.exports = router;
