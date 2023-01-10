const User = require("../models/User");

class UserController {
    new(req, res) {
        res.render('users/new')
    }

    async create(req, res) {
        try {
            await User.createNew(req.body);
            res.redirect('/');
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserController;