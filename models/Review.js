const db = require('../config/db');

class ReviewModel {
    async createNew(userID, malID, subject, content) {
        const sql = "INSERT INTO reviews (user_id, mal_id, subject, content, date_created) VALUES (?, ?, ?, ?, NOW());";

        try {
            const [review, _] = await db.execute(sql, [ userID, malID, subject, content ]);
            return review;
        } catch (error) {
            console.log(error)
        }
    }

    async getAnimePageReviews(malID) {
        const sql = "SELECT users.username, reviews.user_id, reviews.mal_id, reviews.subject, reviews.content FROM reviews JOIN users ON reviews.user_id = users.id WHERE reviews.mal_id = ?;";

        try {
            const [review, _] = await db.execute(sql, [ malID ]);
            console.log(review)
            return review;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ReviewModel;