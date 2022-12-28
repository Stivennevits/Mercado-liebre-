let express = require("express");

let router = express.Router();

let mainController = require("../controllers/mainController")

router.get("/productos", mainController.productos)

module.exports = router