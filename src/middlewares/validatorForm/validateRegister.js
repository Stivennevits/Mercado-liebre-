const path = require('path');
const { body,check } = require("express-validator")

module.exports = [
    check("nombre").notEmpty().withMessage("El campo nombre es obligatorio"),
    body("userName").notEmpty().withMessage("Debes elegir un nombre de usuario"),
    body("Correo").notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body("Domicilio").notEmpty().withMessage("ingresa tu direccion de domicilio"),
    body("preferencia").notEmpty().withMessage("Selecciona una opción"),
    //body("Intereses").notEmpty().withMessage("selecciona una opción"),
    body("contra").notEmpty().withMessage("crea una contraseña fuerte"),
    body("Ccontra").notEmpty().withMessage("crea una contraseña fuerte"),
    body("fecha").isDate().withMessage("ingresa tu fecha de nacimiento"),
    body("picture").custom((value, {req}) => {
        let file = req.file;
        let aceptedExtensions = [".jpg", ".png", ".gif"];
        
        if(!file){
            throw new Error ("Debes seleccionar una imagen")
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!aceptedExtensions.includes(fileExtension)){
                throw new Error (`Las extensiones permitidas son ${aceptedExtensions.join(", " )}`)
            }
        }
        
        return true;
    })
] 

