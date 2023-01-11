const axios = require('axios');
const AnimeModel = require('../models/Anime');

class MainController {
    async index(req, res) {
        try {
            const airingAnime = await AnimeModel.getAiring();
            // console.log(airingAnime.data.data);
            res.render('main/index', { animeData: airingAnime.data.data });
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = new MainController;