const express = require('express');
const router = express.Router();

const Middleware = require('./middleware');
const MainController = require('./controllers/MainController')
const UserController = require('./controllers/Users');
const AnimeController = require('./controllers/Animes');
const SessionController = require('./controllers/Sessions');

router.get('/', Middleware.getUser, MainController.index);

router.get('/login', SessionController.index);
router.post('/login', SessionController.create);
router.get('/logout', SessionController.destroy);

router.get('/users/new', UserController.new);
router.post('/users', UserController.create);

router.get('/anime/:id', AnimeController.show);

module.exports = router;

