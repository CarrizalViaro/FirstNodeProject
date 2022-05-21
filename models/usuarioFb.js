const { db, dbAuth} = require('../dbfirebase/dbConect');

module.exports = class UsuarioModel {
  // obtener todas las notas
  static async getAllUsuarios() {
    let response = {};
    await db.ref('usuarios').once('value', (snapshot) => {
      response = snapshot.val();
    });
    return response;
  }

  static async getNotaById(id) {
    let response = {};
    await db.ref('usuarios/' + id).once('value', (snapshot) => {
      response = snapshot.val();
    });
    return response;
  }

  // nueva tarea
  static async createUsuario(newNota) {
    const response = await db.ref('usuarios').push(newNota);
    return response;
  }

  // actualizar una tarea
  static async updateUsuario(id, newData) {
    const response = await db.ref('usuarios/' + id).set(newData);
    return response;
  }

  // borrar tarea
  static async deleteUsuario(id) {
    const response = await db.ref('usuarios/' + id).remove();
    return response;
  }
};
