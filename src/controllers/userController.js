const { validationResult } = require("express-validator")
const { writeFileSync } = require("fs")
const path = require("path")
const fs = require("fs");

const productosFilePath = path.join(__dirname, "../data/productos.json")
//  let productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"))
const usersFilePath = path.join(__dirname, "../data/usuarios.json")

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
        productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"))
        res.render("productos/productos", {productos});
    },

    store: function(req,res){
        
        let errors  = validationResult(req);
        
        if(errors.errors.length > 0){
            res.render("vender/formularioVender", {errors: errors.mapped(), old: req.body})
        }else{
            productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"))
            let newProduct = {
                id: productos[productos.length - 1].id + 1,
                nombre: req.body.nombre,
                precio: req.body.precio,
                descuento: req.body.descuento, 
                img: req.file.filename // se usa filename, que viene del multer
            }
            productos.push(newProduct); // se agrega el nuevo objeto a la lista usuarios.json 
            fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "))
            res.redirect("/users/") 
        }
        
        /*
        if (errors.isEmpty()){
             // guardar producto 
        
        let newProduct = {
            id: productos[productos.length - 1].id + 1,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descuento: req.body.descuento, 
            img: req.file.filename // se usa filename, que viene del multer
        }
        productos.push(newProduct); // se agrega el nuevo objeto a la lista usuarios.json 
        fs.writeFileSync(productosFilePath, JSON.stringify(this.productos, null, " "))
        res.redirect("/users/") 
        }else{
            res.render("vender/formularioVender", {errors: errors.array(), old: req.body})
        }*/
       
    },
    detail: function(req,res){
        const id = req.params.id;
        const producto = productos.find(producto => producto.id == id);
        res.render("productos/producto", {producto})
    },
    
    update: function(req,res){
        const id = req.params.id;
        const productoToEdit = productos.find(producto => producto.id == id);

        const editarProducto = {
            id: id,
            nombre : req.body.nombre,
            precio : req.body.precio,
            descuento: req.body.descuento,
            img: req.file ? req.file.filename : productoToEdit.img
        }

        productos.forEach((producto, index) => {
            if(producto.id  == id){
                productos[index] = editarProducto
            }
        })
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null," "));
            res.redirect("/users/")

    },

    edit: function(req,res){
        const id = req.params.id
        const user = users.find(user => user.id == id);
        res.render("edit/edit", {user})
    },

    list: function(req,res){
        archivoJSON = fs.readFileSync(usersFilePath, "utf-8")
        users = JSON.parse(archivoJSON);
        res.render("listas/listas", {users})
    },

    searchUser: function(req,res){

        let busquedaUser = req.query.query;
        // leer el json con los datos
        archivoJSON = fs.readFileSync(usersFilePath, "utf-8")
        users = JSON.parse(archivoJSON);
        // nuevo listado
            let resultado=[]

            for(let i = 0; i < users.length; i++ ){
                if(users[i].nombre.includes(busquedaUser)){
                    resultado.push(users[i]);
                }
            }

        res.render("listas/listasResults", {resultado: resultado})

    },
       // se hace controller para el post 
    createUser: function(req,res){

        let errors = validationResult(req);

        if(errors.errors.length > 0){
            return res.render("register/register", {errors: errors.mapped(), old: req.body})
        }else{
            // guardar usuario
        archivoJSON = fs.readFileSync(usersFilePath, "utf-8")
        users = JSON.parse(archivoJSON);
        let regUsuario = {

            id: users[users.length - 1].id +1,
            nombre: req.body.nombre , 
            nombreUsuario: req.body.userName ,
            correo: req.body.Correo , 
            fecha: req.body.fecha , 
            Domicilio: req.body.Domicilio , 
            preferencia: req.body.preferencia , 
            Intereses: req.body.Intereses , 
            picture: req.file.filename, 
            contraseña: req.body.contra , 
            Confircontraseña: req.body.Ccontra 

        }
        users.push(regUsuario)
        fs.writeFileSync(usersFilePath, JSON.stringify(this.users, null, " "))
        res.redirect("/users/Usuarios")
        }
        
        /*
        if (errors.isEmpty()){
            // guardar usuario
        archivoJSON = fs.readFileSync(usersFilePath, "utf-8")
        users = JSON.parse(archivoJSON);
        let regUsuario = {

            id: users[users.length - 1].id +1,
            nombre: req.body.nombre , 
            nombreUsuario: req.body.userName ,
            correo: req.body.Correo , 
            fecha: req.body.fecha , 
            Domicilio: req.body.Domicilio , 
            preferencia: req.body.preferencia , 
            Intereses: req.body.Intereses , 
            picture: req.file.filename, 
            contraseña: req.body.contra , 
            Confircontraseña: req.body.Ccontra 

        }
        users.push(regUsuario)
        fs.writeFileSync(usersFilePath, JSON.stringify(this.users, null, " "))
        res.redirect("/users/Usuarios")
        }else{
            res.render("register/register", {errors: errors.array(), old: req.body})
        }*/
        
    },
    detalleUser: function(req,res){
        const id = req.params.id;
        const user = users.find(user => user.id == id);
        res.render("listas/usuario", {user})
    },
    editProduct: function(req,res){
        const id = req.params.id;
        const producto = productos.find(producto => producto.id == id);
        res.render("vender/editarProducto", {producto})

    },
    updateUser: function(req,res){
        const id = req.params.id;
        const userToEdit = users.find(user => user.id == id);

        const editarUser = {
            id: id,
            nombre: req.body.nombre , 
            nombreUsuario: req.body.userName ,
            correo: req.body.Correo , 
            fecha: req.body.fecha , 
            Domicilio: req.body.Domicilio , 
            preferencia: req.body.preferencia , 
            Intereses: req.body.Intereses , 
            picture: req.file ? req.file.filename : userToEdit.picture, 
            contraseña: req.body.contra , 
            Confircontraseña: req.body.Ccontra 

        }
        users.forEach((user,index) => {
            if(user.id == id){
                users[index] = editarUser
            }
        })
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/users/usuarios/")
    },
    vender: function(req,res){
        
        res.render("vender/formularioVender")

    },
    destroy: function(req,res){
        const id = req.params.id;
        const productosFinal = productos.filter(producto => producto.id != id);
        fs.writeFileSync(productosFilePath, JSON.stringify(productosFinal, null," "));
        res.redirect("/")
    },
    destroyUser: function(req,res){
        const id = req.params.id;
        const usersFinal = users.filter(user => user.id != id);
        fs.writeFileSync(usersFilePath, JSON.stringify(usersFinal, null," "));
        res.redirect("/users/usuarios/")
    }

}

module.exports = userController;