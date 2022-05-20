
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,validarSession,validarSessionPost
} = require('../middlewares');


const { notasGet,
        notasPost } = require('../controllers/notas');

const router = Router();


router.get('/',[validarSessionPost], notasGet );

router.post('/insert',[
    validarSession,
    check('titulo', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], notasPost );

module.exports = router;