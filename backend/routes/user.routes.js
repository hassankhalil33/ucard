const {Router} = require('express');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();
const {
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller')

router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);
// router.delete('/', userMiddleware, deleteUser);

module.exports = router;
