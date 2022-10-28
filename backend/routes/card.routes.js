const {Router} = require('express');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();
const {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
} = require('../controllers/card.controller')


router.get('/', userMiddleware, getAllCards);
router.get('/:id', userMiddleware, getCard);
router.post('/', userMiddleware, createCard);
router.put('/', userMiddleware, updateCard);
router.delete('/', userMiddleware, deleteCard);

module.exports = router;
