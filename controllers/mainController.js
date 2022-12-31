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
    },

    list: function(req,res){
        let lista = [
            {
                nombre: 'Motorola Moto E6 Plus',
                precio: 14999
            },
            {
                nombre: 'Motorola Moto G7',
                precio: 19999
            },
            {
                nombre: 'Alcatel 5033A',
                precio: 6999
            },
            {
                nombre: 'Samsung Galaxy A50',
                precio: 33499
            }
        ]
        res.render("listas", {"lista" : lista})
    },

    search: function(req,res){

        let busquedaUser = req.query.query;

        let lista = [
            {
                nombre: 'Motorola Moto E6 Plus',
                precio: 14999
            },
            {
                nombre: 'Motorola Moto G7',
                precio: 19999
            },
            {
                nombre: 'Alcatel 5033A',
                precio: 6999
            },
            {
                nombre: 'Samsung Galaxy A50',
                precio: 33499
            }
        ]
            let resultado=[]

            for(let i = 0; i < lista.length; i++ ){
                if(lista[i].nombre.includes(busquedaUser)){
                    resultado.push(lista[i]);
                }
            }

        res.render("listasResults", {resultado: resultado})

    }
}

module.exports = mainController;