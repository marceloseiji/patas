const mysql = require("mysql");

let conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "patas",
  port: "3308",
});

module.exports = conexao;
