const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.resolve(__dirname, "./public")
const PORT = process.env.PORT || 4020
app.use(express.static(publicPath))

app.listen(PORT, () =>{console.log("Corriendo servidor en el puerto" + " " + PORT + " " + "http://localhost:" + PORT) } )

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname , "./views/home.html"))
})