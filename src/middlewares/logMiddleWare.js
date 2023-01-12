const fs = require("fs");



function logMiddleWare (req,res,next){
    fs.appendFileSync("login.txt", "* Se ingresó a la página " + req.url + "\n")
    
    next()
}

module.exports = logMiddleWare