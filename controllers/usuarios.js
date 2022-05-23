const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');
const UsuariosService = require('../services/usuariosService');


const usuariosGet = async(req = request, res = response) => {

    const usuarios = await UsuariosService.usuariosAll();

    res.json({
        usuarios
    });
}

const usuariosPost = async(req, res = response) => {
    
    const { name, lastName, user, correo, password } = req.body;
    const usuarioNew = { name, lastName, user, correo, password };
    const salt = bcryptjs.genSaltSync();
    usuarioNew.password = bcryptjs.hashSync( password, salt );

    const usuario = await UsuariosService.usuariosAdd(usuarioNew);

    res.json({
        usuario
    });
}


module.exports = {
    usuariosGet,
    usuariosPost
}