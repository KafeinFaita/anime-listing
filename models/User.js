const db = require('../config/db');
const bcrypt = require('bcrypt');

class UserModel {
    async createNew({ username, password, email }) {
        const sql = "INSERT INTO users (username, password, email, join_date) VALUES (?, ?, ?, NOW());";
        const hashedPassword = await bcrypt.hash(password, 10);

        const [user, _] = await db.execute(sql, [username, hashedPassword, email]);
        return user;
    }
}

module.exports = new UserModel;