const express = require('express');
const router = express.Router();

const MainController = require('./controllers/MainController')
const UserController = require('./controllers/Users');
const AnimeController = require('./controllers/Animes');

router.get('/', MainController.index);

router.get('/users/new', UserController.new);
router.post('/users', UserController.create);

router.get('/anime/:id', AnimeController.show);

module.exports = router;

