const Session = require('../models/Session');

class SessionController {

    async index(req, res) {
        console.log(req.session.user)
        res.render('sessions/login');
    }

    async create(req, res) {
        try {
            const user = await Session.login(req.body);
            console.log(user)
            req.session.loggedIn = true;
            req.session.user = user;
            res.redirect('/');
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