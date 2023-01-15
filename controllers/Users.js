const User = require("../models/User");

class UserController {
    new(req, res) {
        res.render('users/new')
    }

    async show(req, res) {
        try {
            const user = await User.getOne(req.params.id);  
            if (!user) res.json({ error: "err"});
            res.render('users/show', { profileID: user.id, profileUsername: user.username, profileEmail: user.email, profileJoinDate: user.join_date });
        } catch (error) {
            
        }
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