const express = require("express");
const router = express.Router();

const home = require("../models/Dono");
const newResponse = require("../models/Response");

router.get("/", function (req, resp, next) {
  home.getAll(function (error, data) {
    let response = new newResponse();

    if (error) {
      response.error = true;
      response.msg = "Erro";
      console.log("Erro: ", response.error);
    } else {
      response.data = data;
    }

    resp.json(response);
  });
});

module.exports = router;
