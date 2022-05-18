const { response } = require('express'), path = require("path");
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generar-jwt');

const session = require("express-session");


const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {
      
        // Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.id );

        // Guardar en BD
        usuario.remember_token = token;
        await usuario.save();

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}

const logout = async (req = request, res = response, next) => {
    const uid = req.usuario.uid

    // leer el usuario que corresponde al uid
    const usuario = await Usuario.findById(uid);

    usuario.remember_token = "";
    await usuario.save();

    return res.render('no_session');
};

const index = async(req, res = response) => {
    res.render('plantilla')
}

const form = async(req, res = response) => {
    res.render('form')
}

module.exports = {
    login,
    logout,
    index,
    form
}
