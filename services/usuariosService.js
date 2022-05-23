const UsuarioModel = require('../models/usuarioFb');


module.exports = class UsuariosService {

    // obtener todas las notas
    static async usuariosAll() {
        try {
            const response = await UsuarioModel.getAllUsuarios();
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    static async loginUser(usuario) {
        try {
            const response = await UsuarioModel.loginUser(usuario);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    static async getUsuario(id) {
        try {
            const usuario = await UsuarioModel.getUsuarioById(id);

            return usuario;
        } catch (e) {
            console.log(e.message);
        }
    }

    // nueva nota
    static async usuariosAdd(usuario) {
        try {
            const response = await UsuarioModel.createUsuario(usuario);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    // borrar nota
    static async usuariosDelete(id) {
        try {
            const response = await UsuarioModel.deleteUsuario(id);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }
}