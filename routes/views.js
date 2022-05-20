const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarJWT, validarSession
} = require('../middlewares');

const { index } = require('../controllers/auth');
const { notasGetView } = require('../controllers/notas');


const router = Router();


router.get('/',[validarSession]
        , index );

router.get('/form',[validarSession]
        , notasGetView );


module.exports = router;