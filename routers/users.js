let express = require("express");
const userController = require("../controllers/userController");

let router = express.Router();


router.get("/login", userController.login)
router.get("/register", userController.register )
router.post("/register", userController.create)
router.get("/usuarios", userController.usuarios)
router.get("/search", userController.search)
router.get("/productos", userController.productos)
router.get("/list", userController.list);


module.exports = router