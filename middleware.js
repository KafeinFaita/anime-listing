class Middleware {

    redirectLoggedInUser(req, res, next) {
        if (req.session.loggedIn && req.session.user) {
            res.redirect('/');
        } else {
            next();
        }
    }

    getUser(req, res, next) {
        if (req.session.loggedIn && req.session.user) {
            res.locals.loggedIn = true;
            res.locals.username = req.session.user.username;
            res.locals.email = req.session.user.email;
            res.locals.id = req.session.user.id;
            next();
        } else {
            res.locals.loggedIn = false;
            res.locals.username = null;
            res.locals.email = null;
            res.locals.id = null;
            next();
        }
    }

    authUser(req, res, next) {
        if (req.session.loggedIn && req.session.user) {
            next();
        } else {
            res.status(401).json({ error: 'User not logged in' })
        }
    }
}

module.exports = new Middleware;