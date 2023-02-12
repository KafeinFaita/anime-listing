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
}

module.exports = new ReviewModel;