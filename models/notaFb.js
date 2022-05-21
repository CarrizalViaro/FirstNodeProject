const db = require('../dbfirebase/dbConect');

module.exports = class NotaModel {
  // obtener todas las notas
  static async getAllNotas() {
    let response = {};
    await db.ref('notas').once('value', (snapshot) => {
      response = snapshot.val();
    });
    return response;
  }

  static async getNotaById(id) {
    let response = {};
    await db.ref('notas/' + id).once('value', (snapshot) => {
      response = snapshot.val();
    });
    return response;
  }

  // nueva tarea
  static async createNota(newNota) {
    const response = await db.ref('notas').push(newNota);
    return response;
  }

  // actualizar una tarea
  static async updateNota(id, newData) {
    const response = await db.ref('notas/' + id).set(newData);
    return response;
  }

  // borrar tarea
  static async deleteNota(id) {
    const response = await db.ref('notas/' + id).remove();
    return response;
  }
};
