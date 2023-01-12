class Middleware {
    getUser(req, res, next) {
        if (req.session.loggedIn && req.session.user) {
            res.locals.loggedIn = true;
            res.locals.username = req.session.user.username;
            res.locals.email = req.session.user.email;
            next();
        } else {
            res.locals.loggedIn = false;
            res.locals.username = null;
            res.locals.email = null;
            next();
        }
    }
}

module.exports = new Middleware;