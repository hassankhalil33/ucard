const {Router} = require('express');
const multer  = require('multer')
const storage = multer({ dest: '../storage/public_images' })
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
router.post('/', storage.single('photo'), createCard);
router.put('/', updateCard);
router.delete('/', deleteCard);

module.exports = router;
