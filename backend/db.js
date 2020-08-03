const mysql = require("mysql");

let conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Root123@",
  database: "patas",
  port: "3306",
});

module.exports = conexao;
