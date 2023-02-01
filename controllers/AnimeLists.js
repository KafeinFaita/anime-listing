const AnimeList = require("../models/AnimeList");

class AnimeListController {

    async create(req, res) {
        try {
            console.log(req.body)
            const { status, score, malID, title } = req.body;
            const list = await AnimeList.createNew(status, score, malID, req.session.user.id, title);

            res.json({ success: true });
        } catch (error) {
            console.log(error)
        }
    }

    async show(req, res) {
        try {
            const list = await AnimeList.get(req.params.id);
            // res.json(list)
            console.log(list)
            res.render('anime_list/index', { list })
        } catch (error) {
            
        }
    }
}

module.exports = new AnimeListController;