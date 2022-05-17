
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos
} = require('../middlewares');


const { usuariosGet,
        usuariosPost } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );

router.post('/insert',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    validarCampos
], usuariosPost );

module.exports = router;