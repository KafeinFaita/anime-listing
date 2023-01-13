const Session = require('../models/Session');

class SessionController {

    async index(req, res) {
        console.log(req.session.user)
        res.render('sessions/login');
    }

    async create(req, res) {
        try {
            const user = await Session.login(req.body);

            if (user.hasOwnProperty('error')) {
                return res.json({ error: user.error });
            }
            console.log(user)
            req.session.loggedIn = true;
            req.session.user = user;
            res.json({ success: true });
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(req, res) {
        if (req.session.user) {
            req.session.destroy();
            res.redirect('/login');
        } else {
            res.redirect('/');
        } 
    }

}

module.exports = new SessionController;