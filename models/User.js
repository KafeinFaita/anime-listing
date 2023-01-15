const db = require('../config/db');
const bcrypt = require('bcrypt');

class UserModel {

    async getOne(id) {
        const sql = "SELECT * FROM users where id = ? LIMIT 1;";

        try {
            const [user, _] = await db.execute(sql, [id]);
            if(user) return user[0];
            
        } catch (error) {
            return error;
        }
    }
    
    async createNew({ username, password, email }) {
        const sql = "INSERT INTO users (username, password, email, join_date) VALUES (?, ?, ?, NOW());";
        const errors = [];

        try {
            if(username.length <= 6) {
                errors.push('Username should have 7 or more characters');
            }

            if(password.length <= 7) {
                errors.push('Password should have 8 or more characters');
            }

            if(errors.length > 0) {
                return { errors };
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const [user, _] = await db.execute(sql, [username, hashedPassword, email]);
            return user;
        } catch (error) {
            if(error.errno === 1062) {
                errors.push('Username and/or email is already in use.');
            }
            return { errors };
        }
        
    }
}

module.exports = new UserModel;