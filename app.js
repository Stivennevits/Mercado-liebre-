const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))

app.listen(4020, () =>{console.log("Corriendo servidor en el puerto 3090 http://localhost:4020") } )

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname , "./views/home.html"))
})