exports.join = `INSERT INTO user (id, email, password, nickname, salt) VALUES (?, ?, ?, ?, ?)`;
exports.emailCheck = `SELECT COUNT(*) as count FROM user WHERE email = ?`;
exports.getUser = `SELECT * FROM user WHERE email = ?`;
