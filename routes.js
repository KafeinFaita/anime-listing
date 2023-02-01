const express = require('express');
const router = express.Router();

const Middleware = require('./middleware');
const MainController = require('./controllers/MainController')
const UserController = require('./controllers/Users');
const AnimeController = require('./controllers/Animes');
const SessionController = require('./controllers/Sessions');
const AnimeListController = require('./controllers/AnimeLists');

router.get('/', Middleware.getUser, MainController.index);

router.get('/login', SessionController.index);
router.post('/login', SessionController.create);
router.get('/logout', SessionController.destroy);

router.get('/users/new', UserController.new);
router.get('/users/:id', UserController.show)
router.post('/users', Middleware.authUser, UserController.create);

router.get('/anime', Middleware.getUser, AnimeController.index);
router.get('/anime/:id', Middleware.getUser, AnimeController.show);

router.get('/users/:id/anime_list', AnimeListController.show);
router.post('/anime_list', AnimeListController.create);

module.exports = router;

