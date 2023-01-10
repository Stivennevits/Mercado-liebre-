// ************ Require's ************
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/login", userController.login)
router.get("/register", userController.register )
router.post("/register", userController.create)
router.get("/edit/:idUser", userController.edit)
router.put("/edit", function(req,res){
    res.send("on put")
})
router.get("/search", userController.search)
router.get("/productos", userController.productos)
router.get("/list", userController.list);
router.get("/vender" , userController.vender)



module.exports = router;