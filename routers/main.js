let express = require("express");

let router = express.Router();

let mainController = require("../controllers/mainController")

router.get("/", mainController.inicio)

module.exports = router

