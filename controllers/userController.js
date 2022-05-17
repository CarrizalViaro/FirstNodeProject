var express = require('express')
  , router = express.Router()

var myDb = require('../db')

//Rutas de usuario controller
app.get("/all", function (peticion, respuesta) {
  let collection = myDb.collection("users");
  collection.find().toArray(function (err, docs) {
    if (err) return respuesta.json({ error: err });
    respuesta.json(docs);
  });
});

app.post("/insert", function (peticion, respuesta) {
  let collection = myDb.collection("users");
  let objUser = {
    name: peticion.body.name,
    lastName: peticion.body.lastName,
    user: peticion.body.user,
    email: peticion.body.email,
    password: peticion.body.password,
  };
  collection.insert(objUser, function (err, result) {
    if (err) return respuesta.json({ error: err });
    respuesta.json(result);
  });
});

module.exports = router