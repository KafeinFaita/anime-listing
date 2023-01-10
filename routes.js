const express = require('express');
const router = express.Router();

const UserController = require('./controllers/Users');

router.get('/users/new', UserController.new);

module.exports = router;

