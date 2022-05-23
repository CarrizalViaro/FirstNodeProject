const NotasModel = require('../models/notaFb');


module.exports = class NotasService {

    // obtener todas las notas
    static async notasAll() {
        try {
            const response = await NotasModel.getAllNotas();
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    // nueva nota
    static async notasAdd(nota) {
        try {
            const response = await NotasModel.createNota(nota);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    static async notasDelete(id) {
        try {
            const response = await NotasModel.deleteNota(id);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }
}