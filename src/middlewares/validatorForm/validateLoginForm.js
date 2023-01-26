const path = require('path');
const { body } = require("express-validator")

module.exports = [
    body("Correo").notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body("contra").notEmpty().withMessage("Ingresa tu contraseña")
]

