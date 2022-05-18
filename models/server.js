const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

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
    this.app.use(express.static(path.join(__dirname, 'public')));

    //Directorio de vistas
    this.app.set("views", "./views");

    //Vistas
    this.app.set("view engine", "pug");

    //Sesion local
    this.app.use(
      session({
        secret: process.env.SECRETORPRIVATEKEY,
        saveUninitialized: true,
        resave: true,
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
