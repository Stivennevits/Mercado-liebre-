// ************ Require's ************
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const uploadFile = require("../middlewares/multerMiddleware")

// express validator
const { body } = require("express-validator")

// validaciones 
const validateRegisterForm = [
    body("nombre").notEmpty().withMessage("El campol nombre es obligatorio"),
    body("userName").notEmpty().withMessage("Debes elegir un nombre de usuario"),
    body("Correo").isEmail().withMessage("Ingresa un e-mail válido"),
    body("fecha").isDate().withMessage("ingresa tu fecha de nacimiento"),
    body("contraseña").isStrongPassword().withMessage("crea una contraseña fuerte")
] 
//formularios
router.get("/login", userController.login)
router.get("/register", userController.register )
router.post("/register", userController.createUser)
//productos
router.get("/", userController.productos)
router.get("/detail/vender" ,userController.vender)
router.post("/detail", uploadFile.single("imgFile"), userController.store)
router.get("/detail/:id", userController.detail)
router.get("/detail/edit/:id", userController.editProduct)
router.put("/detail/edit/:id", uploadFile.single("imgFile"), userController.update)
router.delete("/detail/delete/:id", userController.destroy)
//usuarios
router.get("/usuarios", userController.list);
router.get("/search", userController.searchUser)
router.post("/detail",  validateRegisterForm ,uploadFile.single("picture"), userController.createUser)
router.get("/usuarios/detail/:id", userController.detalleUser)
router.get("/usuarios/detail/edit/:id", userController.edit)
router.put("/usuarios/detail/edit/:id",uploadFile.single("picture") ,userController.updateUser)
router.delete("/usuarios/detail/delete/:id", userController.destroyUser)




module.exports = router;