const path = require("path")
const fs = require("fs");

const mainController = {

    inicio: function(req, res){
    // rutas con html 
    // res.sendFile(path.join(__dirname,"../views/home/home.ejs"))
    // ruta con render 
    res.render("home/home");
        },

    

    

    

    
 
}

module.exports = mainController;