const db = require("../conexao");

module.exports = class Pets {
  static getAll(callback) {
    return db.query("SELECT * FROM pets", callback);
  }
};
