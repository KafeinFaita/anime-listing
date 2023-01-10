class UserController {
    new(req, res) {
        res.render('users/new')
    }
}

module.exports = new UserController;