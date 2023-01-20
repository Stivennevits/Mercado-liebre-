// ************ Require's ************
const express = require("express")
const path = require("path")
const methodOverride = require("method-override")
var logMiddleWare = require("../src/middlewares/logMiddleWare")
let session = require("express-session")

// ************ express() - (don't touch) ************
const app = express();


// ************ Middlewares - (don't touch) ************
//app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))
app.use(logMiddleWare)
// captura de info en verbo post 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({secret: "Es un Secreto de plan b :v"}))// para usar el session 
// ejs uso 
// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas


// ************ Sistema de Rutas ************
const rutasMain = require("./routers/main");
const rutasUsers = require("./routers/users");

app.use("/", rutasMain)
app.use("/users", rutasUsers)


//configurar 404

app.use((req,res,next)=> {
    res.status(404).render("not-found/not-found")
})


// ************ Creando servidor ************

const PORT = process.env.PORT || 4020
app.listen(PORT, () =>{console.log("Corriendo servidor en el puerto" + " " + PORT + " " + "http://localhost:" + PORT  + " 🎉🔥") } )




// nuevo 

/*
app.get("/", rutasMain)
app.get("/login", rutasUsers)
app.get("/register", rutasUsers)
app.post("/register", rutasUsers)
app.get("/productos", rutasUsers )
app.get("/list", rutasUsers)
app.get("/search", rutasUsers)
app.get("/edit/:idUser", rutasUsers)
app.get("/edit", rutasUsers)
*/



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