const mysql = require("mysql");

let conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "patas",
  port: "3306",
});

module.exports = conexao;
