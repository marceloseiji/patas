const mysql = require('mysql');

let conexao = mysql.createPool({
  host: 'localhost',
  user = 'root',
  password = '123456',
  database = 'patas'
});

module.exports = conexao;
