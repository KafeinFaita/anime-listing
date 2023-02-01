const db = require('../config/db');

class AnimeListModel {
    async createNew(status, score, malID, userID, title) {
        const sql = "INSERT INTO anime_lists (user_id, mal_id, status_id, score, anime_title, date_created) VALUES (?, ?, ?, ?, ?, NOW());";

        try {
            const [list, _] = await db.execute(sql, [ userID, malID, status, score, title ]);
            return list;
        } catch (error) {
            
        }
    }

    async get(id) {
        const sql = "SELECT user_id, mal_id, status_name, anime_title, score FROM anime_lists LEFT JOIN anime_status ON anime_lists.status_id = anime_status.id WHERE user_id = ?;";

        try {
            const [list, _] = await db.execute(sql, [id]);
            return list;
        } catch (error) {
            
        }
    }
}

module.exports = new AnimeListModel;