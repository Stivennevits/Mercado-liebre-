// ************ Require's ************
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const uploadFile = require("../middlewares/multerMiddleware")

router.get("/login", userController.login)
router.get("/register", userController.register )
router.post("/register", userController.createUser)
router.get("/edit/:idUser", userController.edit)
router.put("/edit", function(req,res){
    res.send("on put")
})
router.get("/search", userController.searchUser)
router.get("/", userController.productos)
router.get("/list", userController.list);
router.get("/detail/vender" ,userController.vender)
router.post("/detail", uploadFile.single("imgFile"), userController.store)
router.get("/detail/:id", userController.detail)
router.get("/detail/edit/:id", userController.editProduct)
router.put("/detail/edit/:id", uploadFile.single("imgFile"), userController.update)
router.delete("/detail/delete/:id", userController.destroy)


module.exports = router;