const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.resolve(__dirname, "./public")
const PORT = process.env.PORT || 4020

// aplicar metodos put y delete
const methodOverride = require("method-override")
app.use(methodOverride("_method"));

// nuevo
let rutasMain = require("./routers/main");
let rutasUsers = require("./routers/users");

app.use(express.static(publicPath))

// captura de info en verbo post 
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

// ejs uso 

app.set("view engine", "ejs");

// nuevo
app.get("/", rutasMain)
app.get("/login", rutasUsers)
app.get("/register", rutasUsers)
app.post("/register", rutasUsers)
app.get("/productos", rutasUsers )
app.get("/list", rutasUsers)
app.get("/search", rutasUsers)
app.get("/usuarios", rutasUsers)

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