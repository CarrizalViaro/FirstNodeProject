const db  = require("../dbfirebase/dbConect");
const bcryptjs = require("bcryptjs");

module.exports = class UsuarioModel {
  // obtener todas las notas
  static async getAllUsuarios() {
    let response = {};
    await db.ref("usuarios").once("value", (snapshot) => {
      response = snapshot.val();
    });
    return response;
  }

  static async loginUser(user) {
    let response = {};
    await db.ref("usuarios")
      .orderByChild("correo")
      .equalTo(user.correo)
      .once("value")
      .then(function (snapshot) {
        var userFind = snapshot.val();
        let keys = Object.keys(userFind)
        let userNew = userFind[keys[0]];
        if (userNew) {
          const validPassword = bcryptjs.compareSync(
            user.password,
            userNew.password
          );
          if (!validPassword) {
            response = {userNew, "login":false, "id":keys[0]};
          } else {
            response = {userNew, "login":true, "id":keys[0]};
          }
        } else {
          response = {userNew, "login":false};
        }
      });
    return response;
  }

  static async getUsuarioById(id) {
    let response = {};
    await db.ref("usuarios/" + id).once("value", (snapshot) => {
      response = snapshot.val();
    });
    return response;
  }

  // nueva tarea
  static async createUsuario(newUsuario) {
    const response = await db.ref("usuarios").push(newUsuario);
    return response;
  }

  // actualizar una tarea
  static async updateUsuario(id, newUsuario) {
    const response = await db.ref("usuarios/" + id).set(newUsuario);
    return response;
  }

  // borrar tarea
  static async deleteUsuario(id) {
    const response = await db.ref("usuarios/" + id).remove();
    return response;
  }
};
