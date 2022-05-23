const { response } = require('express'), path = require("path");
const bcryptjs = require('bcryptjs')

const UsuariosService = require('../services/usuariosService');

const { generarJWT } = require('../helpers/generar-jwt');

const session = require("express-session");


const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {
        const usuarioNew = { correo, password };
        

        const {userNew,login,id} = await UsuariosService.loginUser(usuarioNew);
        if(!login){
            return res.status(401).json({
                msg: 'Credenciales incorrectas'
            });
        }
        // Generar el JWT
        const token = await generarJWT( id );
        req.session.remember_token = token;

        res.json({
            userNew,
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

    req.session.destroy();

    return res.render('no_session');
};

const index = async(req, res = response) => {
    res.render('plantilla')
}



module.exports = {
    login,
    logout,
    index
}
