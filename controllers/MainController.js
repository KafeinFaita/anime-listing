const axios = require('axios');
const AnimeModel = require('../models/Anime');

class MainController {
    async index(req, res) {
        try {
            const airingAnime = await AnimeModel.getMulti('https://api.jikan.moe/v4/anime?status=airing&order_by=score&sort=desc&limit=15');
            const topAnime = await AnimeModel.getMulti('https://api.jikan.moe/v4/top/anime?limit=15');
            const topUpcoming = await AnimeModel.getMulti('https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=15');

            res.render('main/index', { airingAnime: airingAnime.data.data, topAnime: topAnime.data.data, topUpcoming: topUpcoming.data.data });
        } catch (error) {
            console.log(error);
        }
    }

    about(req, res) {
        res.render('main/about');
    }
}

module.exports = new MainController;