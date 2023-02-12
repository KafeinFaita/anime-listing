const { default: axios } = require('axios');
const Anime = require('../models/Anime');
const AnimeList = require('../models/AnimeList');

class AnimeController {

    async index(req, res) {
        try {
            let anime;
            // runs if the user accessed the link by clicking the pagination or filters
            if (req.headers.token && req.headers.token === 'valid') {
                anime = await Anime.get(req.query)
                
                res.json(anime.data.data)
            // runs by directly accessing the link or by refreshing
            } else {
                anime = await Anime.get();
                res.render('anime/index', { anime: anime.data.data });
            }    
        } catch (error) {
            
        }
    }

    async show(req, res) {
        try {
            const anime = await Anime.getOne(req.params.id);
            let animeList = null;

            // get user's anime list if they're logged in
            if (req.session.loggedIn) {
                animeList = await AnimeList.get(req.session.user.id);
            }

            res.render('anime/show', { anime: anime.data, list: animeList })
        } catch (error) {
            res.json(error);
        }
        
    }

    async random(req, res) {
        try {
            const anime = await Anime.getRandom();
            res.redirect(`/anime/${anime.data.mal_id}`)
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = new AnimeController;