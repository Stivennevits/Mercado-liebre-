const path = require("path")

const userController = {

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

    usuarios: function(req,res){
        res.render("users")
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

    },


       // se hace controller para el post 
    create: function(req,res){
        let regUsuario = {
            nombre: req.body.nombre , 
            nombreUsuario: req.body.userName ,
            correo: req.body.Correo , 
            fecha: req.body.fecha , 
            Domicilio: req.body.Domicilio , 
            preferencia: req.body.preferencia , 
            Intereses: req.body.Intereses , 
            picture: req.body.picture , 
            contraseña: req.body.contraseña , 
            Confircontraseña: req.body.contraseña 

        }

        // guardar datos

        res.redirect("/")
    }

}

module.exports = userController