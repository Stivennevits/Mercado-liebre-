const path = require("path")

const mainController = {

    inicio: function(req, res){
    // rutas con html 
    // res.sendFile(path.join(__dirname,"../views/home.html"))
    
    // ruta con render 
    res.render("home");
        },

    

    

    

    
 
}

module.exports = mainController;