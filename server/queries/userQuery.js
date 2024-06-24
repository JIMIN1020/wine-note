exports.join = `INSERT INTO user (id, email, password, nickname, salt) VALUES (?, ?, ?, ?, ?)`;
exports.emailCheck = `SELECT COUNT(*) as count FROM user WHERE email = ?`;
exports.getUser = `SELECT * FROM user WHERE email = ?`;
exports.getUserById = `SELECT * FROM user WHERE id = ?`;
exports.setRefresh = `UPDATE user SET refresh = ? WHERE id = ?`;
exports.getRefresh = `SELECT refresh FROM user WHERE id = ?`;
