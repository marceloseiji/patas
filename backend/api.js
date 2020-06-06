const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const api = express();
const port = 3000;
const router = express.Router();

api.use(cors());
api.use(bodyparser.urlencoded({extended: true}));

router.get("/", (req, resp) => resp.json({
  message: '=> API Online...'
}));

api.use('/', router);
api.listen(port);
console.log('Run API Express');