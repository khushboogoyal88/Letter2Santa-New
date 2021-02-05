const express = require('express');
const router = express.Router();

const { getLetters, addLetters, deleteLetters } = require('../controllers/letters')

router
.route('/')
.get(getLetters)
.post(addLetters);

router
.route('/:id')
.delete(deleteLetters);

module.exports = router;