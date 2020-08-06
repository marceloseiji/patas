const mysql = require("mysql");

/*let conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Root123@",
  database: "patas",
  port: "3306",
});*/

let conexao = mysql.createPool({
  host: "localmysql669.umbler.comhost",
  user: "ikuta.marcelo",
  password: "Viper1020*",
  database: "patas",
  port: "3306",
});

module.exports = conexao;
