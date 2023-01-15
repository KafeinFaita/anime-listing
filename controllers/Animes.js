const Anime = require('../models/Anime');

class AnimeController {
    async show(req, res) {
        try {
            const anime = await Anime.getOne(req.params.id);
            res.render('anime/show', { data: anime.data })
        } catch (error) {
            res.json(error)
        }
        
    }
}

module.exports = new AnimeController;