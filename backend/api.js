const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const api = express();
const port = 3000;
const router = express.Router();

const register_dono = require("./router/register_dono");

api.use(cors());
api.use(bodyparser.urlencoded({ extended: true }));

router.get("/", (req, resp) =>
  resp.json({
    message: "=> API Online...",
  })
);

api.use("/", router);
api.use("/dono", register_dono);
api.listen(port);
console.log("Run API Express");
