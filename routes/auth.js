const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos, validarSession } = require('../middlewares');


const { login, logout } = require('../controllers/auth');


const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login );

router.get('/logout',[
    validarSession
],logout );



module.exports = router;