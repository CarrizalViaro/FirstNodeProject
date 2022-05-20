
const { Schema, model } = require('mongoose');

const NotaSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatorio']
    }
});



NotaSchema.methods.toJSON = function() {
    const { __v , _id, ...nota  } = this.toObject();
    nota.uid = _id;
    return nota;
}

module.exports = model( 'Nota', NotaSchema );
