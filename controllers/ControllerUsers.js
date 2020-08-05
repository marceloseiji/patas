const db = require("../db");
const fs = require("fs");

module.exports = {
  //Adiciona novo dono
  async registerUser(req, res) {
    let data = {
      dono_nome: req.body.dono_nome,
    };

    try {
      db.query("insert into dono SET ?", [data], (err, rows, fileds) => {
        if (!err) {
          res.send("user created!");
        } else {
          console.log(err);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
};
