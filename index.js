const express = require("express"),
  path = require("path"),
  app = express(),
  puerto = 3000;

var db = require('./db');

const URL = "mongodb://localhost:27017";
var myDb;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.static(__dirname + "/public"));
app.use('/users', require('./controllers/userController'))

app.post("/login", function (peticion, respuesta) {
  let collection = myDb.collection("users");
  let credentials = {
    email: peticion.body.email,
    password: peticion.body.password,
  };
  collection.find(credentials).toArray(function (err, docs) {
    if (err) return respuesta.json({ error: err });
    if (docs.length > 0) {
      respuesta.json({ res: "OK" });
    } else {
      respuesta.json({ error: "Las credenciales son incorrectas" });
    }
  });
});

app.get("/", (peticion, respuesta) => {
  // Servir archivo HTML, o cualquier otro archivo
  let rutaDeArchivo = path.join(__dirname, "plantilla.html");
  respuesta.sendFile(rutaDeArchivo);
});

app.get("/hola", (peticion, respuesta) => {
  let mascota = {
    nombre: "Maggie",
    edad: 2,
  };
  respuesta.json(mascota);
});

// Connect to Mongo on start
db.connect(URL, function (err) {
  if (err) {
    console.log("Unable to connect to Mongo.");
    process.exit(1);
  } else {
    // Una vez definidas nuestras rutas podemos iniciar el servidor
    app.listen(puerto, (err) => {
      if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
      }
      // Si no se detuvo arriba con el return, entonces todo va bien ;

      console.log(`Escuchando en el puerto :${puerto}`);
    });
  }
});
