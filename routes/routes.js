const express = require('express');
const router = express.Router();

const { getIndex, postGreetings } = require('../controllers/controller');

router.get('/', getIndex);
router.post('/greetings', postGreetings);

module.exports = router;