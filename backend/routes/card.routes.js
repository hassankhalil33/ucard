const {Router} = require('express');
const router = Router();
const {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
} = require('../controllers/card.controller')


router.get('/', getAllCards);
router.get('/:id', getCard);
router.post('/', createCard);
router.put('/', updateCard);
router.delete('/', deleteCard);

module.exports = router;
