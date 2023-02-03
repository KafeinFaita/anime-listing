const AnimeList = require("../models/AnimeList");
const User = require("../models/User");


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
            const user = await User.getOne(req.params.id);
            console.log(user)
            res.render('anime_list/index', { list, user: { username: user.username, id: user.id } })
        } catch (error) {
            
        }
    }
}

module.exports = new AnimeListController;