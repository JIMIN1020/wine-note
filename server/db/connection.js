const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "WineNote",
  dateStrings: true,
});

module.exports = connection;
