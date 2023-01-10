const Anime = require('../models/Anime');

class AnimeController {
    async show(req, res) {
        const anime = await Anime.getOne(req.params.id);
        // res.json(anime.data)
        console.log(anime.data)
        res.render('anime/show', { data: anime.data })
    }
}

module.exports = new AnimeController;