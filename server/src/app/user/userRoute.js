const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.post('/signUp', userController.postUser);

module.exports = router;
