const express = require('express');
const router = express.Router();

const Middleware = require('./middleware');
const MainController = require('./controllers/MainController')
const UserController = require('./controllers/Users');
const AnimeController = require('./controllers/Animes');
const SessionController = require('./controllers/Sessions');
const AnimeListController = require('./controllers/AnimeLists');

router.get('/', Middleware.getUser, MainController.index);
router.get('/about', Middleware.getUser, MainController.about)

router.get('/login', Middleware.redirectLoggedInUser, SessionController.index);
router.post('/login', Middleware.redirectLoggedInUser, SessionController.create);
router.get('/logout', SessionController.destroy);

router.get('/users/new', Middleware.redirectLoggedInUser, UserController.new);
router.get('/users/:id', Middleware.getUser, UserController.show)
router.post('/users', Middleware.redirectLoggedInUser, UserController.create);

router.get('/anime', Middleware.getUser, AnimeController.index);
router.get('/anime/:id', Middleware.getUser, AnimeController.show);
router.get('/random', Middleware.getUser, AnimeController.random);

router.get('/users/:id/anime_list', Middleware.getUser, AnimeListController.show);
router.post('/anime_list', AnimeListController.create);

module.exports = router;

