
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,validarSessionPost
} = require('../middlewares');


const { notasGet,
        notasPost } = require('../controllers/notas');

const router = Router();


router.get('/', notasGet );

router.post('/insert',[
    validarSessionPost,
    check('titulo', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], notasPost );

module.exports = router;