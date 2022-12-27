const path = require("path")

const mainController = {

    inicio: function(req, res){
    res.sendFile(path.join(__dirname,"../views/home.html"))
        },

    login: function(req, res){
    res.sendFile(path.join(__dirname,"../views/login.html"))
        },
    register: function(req, res){
        res.sendFile(path.join(__dirname,"../views/register.html"))
    }
}

module.exports = mainController;