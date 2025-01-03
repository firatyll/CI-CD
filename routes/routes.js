const express = require('express');
const router = express.Router();

const { getIndex, postGreetings, getLecture } = require('../controllers/controller');

router.get('/', getIndex);
router.post('/greetings', postGreetings);
router.get('/lecture' , getLecture)

module.exports = router;