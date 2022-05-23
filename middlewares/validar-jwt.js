const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const Usuario = require("../models/usuario");
const UsuariosService = require('../services/usuariosService');

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // leer el usuario que corresponde al uid
    const usuario = await UsuariosService.getUsuario(id);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};

const validarSession = async (req = request, res = response, next) => {
    const token = req.session.remember_token
  
    if(!token){
        return res.render('no_session');
    }

    const { exp } = jwt.decode(token);
    if (Date.now() >= exp * 1000) {
        req.session.destroy();
        return res.render('no_session');
    }
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // leer el usuario que corresponde al uid
    const usuario = await UsuariosService.getUsuario(id);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

    req.usuario = usuario;

    next();
};

const validarSessionPost = async (req = request, res = response, next) => {
    const token = req.query.remember_token || req.body.remember_token
  
    if(!token){
        return res.render('no_session');
    }
    
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // leer el usuario que corresponde al uid
    const usuario = await UsuariosService.getUsuario(id);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

  next();
};

module.exports = {
  validarJWT,
  validarSession,
  validarSessionPost
};
