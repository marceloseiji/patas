const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const ControllerDonos = require("./controllers/ControllerDonos");

//Rotas de donos
app.post("/donos/insert", ControllerDonos.insert);
app.put("/donos/update/:id", ControllerDonos.update);
app.get("/donos/:id", ControllerDonos.findOne);
app.get("/donos", ControllerDonos.findAll);
app.delete("/donos/delete/:id", ControllerDonos.delete);

//Inicia a API na porta 3000
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Api rodando na porta: ${port}`);
});
