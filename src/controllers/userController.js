const { writeFileSync } = require("fs")
const path = require("path")
const fs = require("fs");

const userController = {

    login: function(req, res){
        //res.sendFile(path.join(__dirname,"../views/login.html"))
            res.render("login/login")
            },

    register: function(req, res){
        //res.sendFile(path.join(__dirname,"../views/register.html"))
        res.render("register/register")
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

        res.render("productos/productos", {"articulos": artic});
    },

    edit: function(req,res){
        let idUser = req.params.idUser

        let lista = [
            {   
                id: 1,
                nombre: 'Motorola Moto E6 Plus',
                precio: 14999
            },
            {   
                id: 2,
                nombre: 'Motorola Moto G7',
                precio: 19999
            },
            {   
                id: 3,
                nombre: 'Alcatel 5033A',
                precio: 6999
            },
            {   
                id: 4,
                nombre: 'Samsung Galaxy A50',
                precio: 33499
            }
        ]   

        let listaToEdit = lista[idUser]
        res.render("edit/edit", {listaToEdit: listaToEdit})
    },

    list: function(req,res){
        let archivoJSON = fs.readFileSync("usuarios.json", {encoding: "utf-8"})
        let users = JSON.parse(archivoJSON);
        res.render("listas/listas", {"users" : users})
    },

    search: function(req,res){

        let busquedaUser = req.query.query;
        // leer el json con los datos
        let archivoJSON = fs.readFileSync("usuarios.json", {encoding: "utf-8"})

        /* asi estaba anteriormente 
        let lista = [ {nombre: 'Motorola Moto E6 Plus', precio: 14999 }, {nombre: 'Motorola Moto G7',  precio: 19999 }, { nombre: 'Alcatel 5033A',precio: 6999}, { nombre: 'Samsung Galaxy A50', precio: 33499  }  ] */
        
        // nuevo listado
        let users = JSON.parse(archivoJSON);

            let resultado=[]

            for(let i = 0; i < users.length; i++ ){
                if(users[i].nombre.includes(busquedaUser)){
                    resultado.push(users[i]);
                }
            }

        res.render("listas/listasResults", {resultado: resultado})

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
        // primero leer que datos existen 
        let archivoUsuario = fs.readFileSync("data/usuarios.json",{encoding: "utf-8"});
        let usuarios
        if (archivoUsuario == ""){
            usuarios = []
        } else {
            usuarios = JSON.parse(archivoUsuario)
        }

        // se actualiza info 
        usuarios.push(regUsuario)

        // se convierte a json 
        usuariosJSON = JSON.stringify(usuarios)

        fs.writeFileSync("data/usuarios.json", usuariosJSON)

        res.redirect("/")
    }

}

module.exports = userController;