let express = require("express");

let router = express.Router();

let mainController = require("../controllers/mainController")

router.get("/login", mainController.login)

module.exports = router