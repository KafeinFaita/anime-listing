const Review = require('../models/Review');

class ReviewController {

    async show(req, res) {
        console.log(req.url)
        res.end();
    }

    async create(req, res) {
        try {
            const { malID, subject, content } = req.body;
            console.log(req.session.user.id)
            const review = await Review.createNew(req.session.user.id, malID, subject, content);

            res.json({ success: true });
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ReviewController;