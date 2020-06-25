const express = require("express");
const app = express();
app.use(express.json());

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

const ControllerDonos = require("./controllers/ControllerDonos");

const multer = require("multer");
// const upload = multer({ dest: "uploads" });

//Disponibiliza os arquivos estaticos da pasta uploads
app.use("/uploads", express.static("uploads"));

//Para remover arquivos
const fs = require("fs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//Rotas de donos
app.post("/donos/insert", ControllerDonos.insert);
app.put("/donos/update/:id", ControllerDonos.update);
app.get("/donos/:id", ControllerDonos.findOne);
app.get("/donos", ControllerDonos.findAll);
app.delete("/donos/delete/:id", ControllerDonos.delete);

//UPLOAD TEST
const upload = require("express-fileupload");
app.use(upload());

//Rotas de pets
app.get("/donos/pets/:id", ControllerDonos.findAllPets);
app.post("/donos/pets/insert", ControllerDonos.insertPet);
app.delete("/donos/pets/delete/:id/:path?", ControllerDonos.deletePet);
app.put("/donos/pets/update/:id/:path?", ControllerDonos.updatePet);

//Rota para servicos
app.get("/donos/servicos/:id", ControllerDonos.findAllServicos);
app.post("/donos/pets/servicos", ControllerDonos.insertServico);
app.delete("/donos/pets/servicos/delete/:id", ControllerDonos.deleteServico);
app.put("/donos/pets/servicos/update", ControllerDonos.updateServico);

// To production
if (process.env.NODE_ENV === "production") {
  // Static folder of vue.js
  app.use(express.static(__dirname + "/public/"));

  // SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//Inicia a API na porta 3000
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Api rodando na porta: ${port}`);
});
