
const path = require('path');
const { body } = require("express-validator")

const validateCreateProduct =   [
    body("nombre").notEmpty().withMessage("Debes nombrar el producto") ,
    body("precio").notEmpty().withMessage("Debes asignarle un precio"),
    body("imgFile").custom((value, {req}) => {
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
    }),
    body("descuento").optional()
]



module.exports = validateCreateProduct;