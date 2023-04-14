let funcionesAsync = require("./funciones.js")

funcionesAsync.obtenerDatos()
    .then(function(resultado){
        console.log(resultado)
    })