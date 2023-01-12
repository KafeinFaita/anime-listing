const db = require('../config/db');
const bcrypt = require('bcrypt');

class SessionModel {
    async login({ username, password }) {
        const sql = "SELECT * FROM users WHERE username = ? LIMIT 1;";

        try {
            const [ user, _ ] = await db.query(sql, [username]);

            if (user[0]) {
                const auth = await bcrypt.compare(password, user[0].password);
    
                if (auth) {
                    return user[0];
                } else {
                    return null;
                }
            }
        } catch (error) {
            return null;
        }
    }
}

module.exports = new SessionModel;