// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require('path');

const userController = require("../controllers/userController");
const uploadFile = require("../middlewares/multerMiddleware")
//// validaciones 
const validateFormCreateProduct = require("../middlewares/validatorForm/validateCreateProduct")
const validateRegisterForm = require("../middlewares/validatorForm/validateRegister.js")
const validateLoginForm = require("../middlewares/validatorForm/validateLoginForm.js")

// express validator
const { body } = require("express-validator")

//formularios
router.get("/login", userController.login)
router.post("/Usuarios/login", validateLoginForm, userController.processLogin)
router.get("/register",  userController.register )
//router.post("/register", userController.createUser)
//productos
router.get("/", userController.productos)
router.get("/detail/vender" , userController.vender)
router.post("/detail", uploadFile.single("imgFile"), validateFormCreateProduct ,userController.store)
router.get("/detail/:id", userController.detail)
router.get("/detail/edit/:id", userController.editProduct)
router.put("/detail/edit/:id", uploadFile.single("imgFile"), userController.update)
router.delete("/detail/delete/:id", userController.destroy)
//usuarios
router.get("/usuarios", userController.list);
router.get("/search", userController.searchUser)
router.post("/Usuarios/detail", uploadFile.single("picture"), validateRegisterForm , userController.createUser)
router.get("/usuarios/detail/:id", userController.detalleUser)
router.get("/usuarios/detail/edit/:id", userController.edit)
router.put("/usuarios/detail/edit/:id",uploadFile.single("picture") ,userController.updateUser)
router.delete("/usuarios/detail/delete/:id", userController.destroyUser)


//hola

module.exports = router;