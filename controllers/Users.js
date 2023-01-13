const User = require("../models/User");

class UserController {
    new(req, res) {
        res.render('users/new')
    }

    async create(req, res) {
        try {
            const user = await User.createNew(req.body);
            if (user.errors) {
                return res.json({ errors: user.errors })
            }

            res.json({ success: true });
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserController;