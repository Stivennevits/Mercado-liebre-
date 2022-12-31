const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.resolve(__dirname, "./public")
const PORT = process.env.PORT || 4020

// nuevo
let rutasMain = require("./routers/main");
let rutasLogin = require("./routers/login");
let rutasRegister = require("./routers/register");
let rutasProductos = require("./routers/productos");
let rutasListas = require("./routers/listas");
let rutasSearch = require("./routers/search");

app.use(express.static(publicPath))

// ejs uso 

app.set("view engine", "ejs");

// nuevo
app.get("/", rutasMain)
app.get("/login", rutasLogin)
app.get("/register", rutasRegister)
app.get("/productos", rutasProductos )
app.get("/list", rutasListas)
app.get("/search", rutasSearch)

app.listen(PORT, () =>{console.log("Corriendo servidor en el puerto" + " " + PORT + " " + "http://localhost:" + PORT) } )



/*  se copia segmento y se envia a main.js
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname , "./views/home.html"))
})

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname , "./views/register.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname , "./views/login.html"))
})

*/