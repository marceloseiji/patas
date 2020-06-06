const db = require("../conexao");

module.exports = class Dono {
  static getAll(callback) {
    return db.query("SELECT * FROM dono", callback);
  }
};
