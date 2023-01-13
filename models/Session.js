const db = require('../config/db');
const bcrypt = require('bcrypt');

class SessionModel {
    async login({ username, password }) {
        try {
            const sql = "SELECT * FROM users WHERE username = ? LIMIT 1;";

            const [ user, _ ] = await db.query(sql, [username]);

            if (user[0]) {
                const auth = await bcrypt.compare(password, user[0].password);
                if (auth) {
                    return user[0];
                } else {
                    return { error: "Incorrect password." };
                }
            } else {
                return { error: "Username doesn't exist." };
            }
        } catch (error) {
            
            return { error: "Database error." };
        }
    }
}

module.exports = new SessionModel;