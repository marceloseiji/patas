const mysql = require("mysql");

/*let conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Root123@",
  database: "patas",
  port: "3306",
});*/

let conexao = mysql.createPool({
  host: "mysql669.umbler.com",
  user: "ikuta.marcelo",
  password: "Viper1020*",
  database: "patas",
});

module.exports = conexao;
