// Data base
const dataBase = require('../config/dataBase');

// Find by id
const findById = async (id) => {
    const [rows] = await dataBase.query(
        'SELECT * FROM users WHERE id = ?',
        [id]
    );
    return rows[0];
}

// Find by email
const findByEmail = async (email) => {
    const [rows] = await dataBase.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );
    return rows[0];
};

// Create user
const create = async (userInfo) => {
    const { email, password } = userInfo;
    const [result] = await dataBase.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, password]
    );
    return result.insertId;
};

module.exports = {
    findByEmail,
    create,
    findById
};