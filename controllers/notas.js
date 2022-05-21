const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Nota = require('../models/nota');
const NotasService = require('../services/notasService');



const notasGet = async(req = request, res = response) => {

    const notas = await NotasService.notasAll();

    res.json({
        notas
    });
}

const notasGetView = async(req = request, res = response) => {

    let notas = await NotasService.notasAll();
    console.log(notas);
    if (notas == null) {
        notas = [];
    }
    res.render('form',{notas: notas})
}

const notasPost = async(req, res = response) => {
    
    const { titulo, descripcion } = req.body;
    const notaNew = { titulo, descripcion };
    const nota = await NotasService.notasAdd(notaNew);

    res.json({
        nota
    });
}


module.exports = {
    notasGet,
    notasGetView,
    notasPost
}