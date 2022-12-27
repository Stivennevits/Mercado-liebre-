let express = require("express");

let router = express.Router();

let mainController = require("../controllers/mainController")

router.get("/register", mainController.register )

module.exports = router