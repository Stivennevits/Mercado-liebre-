const { writeFileSync } = require("fs")
const fs = require("fs");
const path = require("path")
const usersFilePath = path.join(__dirname, "../data/usuarios.json")


const UserModels = {
    
    
    getData : function(){
        return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"))
    },
    generateId : function(){
        let allUsers = this.findAll()
        let lastuser = allUsers.pop()
        if(lastuser){
           return lastuser.id + 1
        }
        return 1
    },
    findAll: function(){
        return this.getData()
    },
    findByPk : function (id){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound
    },

    findByField : function (field, text){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound
    },
    
    create: function(userData){
        let allUsers = this.findAll()
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, " "));
        return newUser

    },
    delete : function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
        return true 

    }
}

module.exports = UserModels;

//console.log(UserModels.findAll())

//console.log(UserModels.getData())
// console.log(UserModels.findByField("correo", "gomita@gmail.com"))
/*console.log(UserModels.create({ 
    
    "nombre": "jaajjajaja",
    "nombreUsuario": "gjaomigomi",
    "correo": "jajgomita@gmail.com",
    "fecha": "2018-12-15",
    "Domicilio": "av siempre vivaaaaaaaaaaaaaaa",
    "preferencia": "Comprador",
    "Intereses": "Electro",
    "picture": "1673994788086_user.png",
    "contraseña": "rrrrrrrrrrrrrr",
    "Confircontraseña": "rrrrrrrrrrrrr"
   }))
*/
   //console.log(UserModels.generateId())
   //console.log(UserModels.delete(8))