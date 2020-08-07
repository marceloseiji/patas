const db = require("../db");
const fs = require("fs");

module.exports = {
  //Adiciona novo dono
  async insert(req, res) {
    let data = {
      dono_nome: req.body.dono_nome,
    };

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

  //PARA OS PETS

  //Lista todos os pets do dono
  async findAllPets(req, res) {
    let id = req.params.id;
    try {
      db.query(
        "select * from pet where dono_id = ?",
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

  //Adiciona novo PET
  async insertPet(req, res) {
    let data = req.body;
    //Adiciona foto no ./uploads
    if (req.files != null) {
      let file = req.files.pet_foto,
        filename = req.body.foto_path;
      filename = filename.replace(/\s/g, "").split("uploads")[1];
      file.mv("uploads/" + filename, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File: ", filename, " uploaded!");
        }
      });
    }

    try {
      db.query("insert into pet SET ?", [data], (err, rows, fileds) => {
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

  //Atualiza um pet
  async updatePet(req, res) {
    let data = req.body;
    let newData = new Object();
    let id = req.params.id;
    let path = data.foto_path;

    for (item in data) {
      if (data[item] != "null") {
        newData[item] = data[item];
      }
    }

    //Atualiza a foto se for enviada
    if (req.files != null) {
      // Remove a foto antiga

      console.log("Tem foto");
      path = path.split("uploads")[1];
      console.log(path);
      fs.unlinkSync("uploads" + path);

      // Adiciona a nova foto
      let file = req.files.pet_foto,
        filename = req.body.foto_path;
      filename = filename.replace(/\s/g, "").split("uploads")[1];
      file.mv("uploads/" + filename, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File: ", filename, " uploaded!");
        }
      });
    }

    try {
      db.query(
        "update pet set ? where pet_id = ?",
        [newData, id],
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

  //Exclui um pet
  async deletePet(req, res) {
    let id = req.params.id;

    if (req.params.path != null) {
      var path = `./uploads${req.params.path.split("uploads")[1]}`;
      fs.unlinkSync(path);
    }

    try {
      db.query(
        "delete from pet where pet_id = ?",
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
  //SERVICOS
  //Lista todos os servicos
  async findAllServicos(req, res) {
    let id = req.params.id;
    try {
      db.query(
        "select * from servico where pet_id = ?",
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
  //Adiciona um servico
  async insertServico(req, res) {
    let data = {
      servico_descricao: req.body.servico_texto,
      pet_id: req.body.servico_pet_id,
    };

    try {
      db.query("insert into servico SET ?", [data], (err, rows, fileds) => {
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
  async deleteServico(req, res) {
    let id = req.params.id;
    try {
      db.query(
        "delete from servico where servico_id = ?",
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
  async updateServico(req, res) {
    let data = {
      servico_descricao: req.body.servico_texto,
      servico_id: req.body.servico_id,
    };

    try {
      db.query(
        "update servico set ? where servico_id = ?",
        [data, data.servico_id],
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
};
