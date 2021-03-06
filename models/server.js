const express = require("express");
const net = require('net');
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const MongoStore = require('connect-mongo'); 
const { dbConnection } = require("../database/config");
const admin = require("firebase-admin");
const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.host = process.env.HOST;

    this.paths = {
      auth: "/api/auth",
      usuarios: "/api/usuarios",
      views: "/views",
      notas: "/api/notas",
    };

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use("/public",express.static(__dirname+"/../public"));

    //Directorio de vistas
    this.app.set("views", __dirname+"./../views");

    //Vistas
    this.app.set("view engine", "pug");

    //Sesion local
    this.app.use(
      session({
        secret: process.env.SECRETORPRIVATEKEY,
        saveUninitialized: true,
        resave: true,
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_CNN })
      })
    );
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.usuarios, require("../routes/usuarios"));
    this.app.use(this.paths.views, require("../routes/views"));
    this.app.use(this.paths.notas, require("../routes/notas"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
