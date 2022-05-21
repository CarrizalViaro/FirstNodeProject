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