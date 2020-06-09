const db = require("../db");

module.exports = {
  //Adiciona novo dono
  async insert(req, res) {
    let data = {
      dono_nome: req.body.dono_nome,
    };
    console.log("data: ", data);
    try {
      db.query("insert into dono SET ?", [data], (err, rows, fileds) => {
        if (!err) {
          res.send("Added succesflly");
        } else {
          console.log(err);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  //Atualiza dono
  async update(req, res) {
    let id = req.params.id;
    let data = {
      pet_id: req.body.pet_id,
      dono_nome: req.body.dono_nome,
    };

    try {
      db.query(
        "update dono set ? where dono_id = ?",
        [data, id],
        (err, rows, fileds) => {
          if (!err) {
            res.send("Updated succesfully");
          } else {
            console.log(err);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  },

  //Lista todos os donos
  async findAll(req, res) {
    try {
      db.query("select * from dono", (err, rows, fileds) => {
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  //Lista um dono específico
  async findOne(req, res) {
    let id = req.params.id;

    try {
      db.query(
        "select * from dono where dono_id = ?",
        [id],
        (err, rows, fileds) => {
          if (!err) {
            res.send(rows);
          } else {
            console.log(err);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  },

  //Exclui um dono
  async delete(req, res) {
    let id = req.params.id;

    try {
      db.query(
        "delete from dono where dono_id = ?",
        [id],
        (err, rows, fileds) => {
          if (!err) {
            res.send("Deleted succesfully");
          } else {
            console.log(err);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
