const path = require("path")

const mainController = {

    inicio: function(req, res){
    // rutas con html 
    // res.sendFile(path.join(__dirname,"../views/home.html"))
    
    // ruta con render 
    res.render("home");
        },

    login: function(req, res){
    //res.sendFile(path.join(__dirname,"../views/login.html"))
        res.render("login")
        },
    register: function(req, res){
        //res.sendFile(path.join(__dirname,"../views/register.html"))
        res.render("register")
    },

    productos: function (req,res){
        let artic = [
            "moto",
            "carro",
            "avion",
            "ps 5 ",
            "portatil", 
            "vapper"
        ]

        res.render("productos", {"articulos": artic});
    }
}

module.exports = mainController;