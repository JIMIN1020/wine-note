exports.join = `INSERT INTO user (id, email, password, nickname, salt) VALUES (?, ?, ?, ?, ?)`;
exports.emailCheck = `SELECT COUNT(*) FROM user WHERE email = ?`;
