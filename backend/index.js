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

//Inicia a API na porta 3000
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Api rodando na porta: ${port}`);
});
