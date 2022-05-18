const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Nota = require('../models/Nota');



const notasGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;

    const [ total, notas ] = await Promise.all([
        Nota.countDocuments(),
        Nota.find()
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        notas
    });
}

const notasPost = async(req, res = response) => {
    
    const { titulo, descripcion } = req.body;
    const nota = new Nota({ titulo, descripcion });

    // Guardar en BD
    await nota.save();

    res.json({
        nota
    });
}


module.exports = {
    notasGet,
    notasPost
}