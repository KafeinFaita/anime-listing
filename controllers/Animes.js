const { default: axios } = require('axios');
const Anime = require('../models/Anime');

class AnimeController {

    async index(req, res) {
        try {
            if (req.query !== {}) {
                const anime = await axios.get('https://api.jikan.moe/v4/top/anime');
                console.log(anime.data.data.length)
                res.render('anime/index', { anime: anime.data.data });
            }
        } catch (error) {
            
        }
    }

    async show(req, res) {
        try {
            const anime = await Anime.getOne(req.params.id);
            res.render('anime/show', { data: anime.data })
        } catch (error) {
            res.json(error)
        }
        
    }

    async random(req, res) {
        try {
            const anime = await Anime.getRandom();
            console.log(anime)
            res.render('anime/show', { data: anime.data })
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = new AnimeController;