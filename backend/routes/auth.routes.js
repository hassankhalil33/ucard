const {Router} = require('express');
const {login, signup} = require('../controllers/auth.controller')
const router = Router();

router.post('/login', login);
router.post('/register', signup);

module.exports = router;
