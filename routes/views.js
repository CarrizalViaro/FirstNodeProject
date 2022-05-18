const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarJWT, validarSession
} = require('../middlewares');

const { index, form } = require('../controllers/auth');


const router = Router();


router.get('/',[validarSession]
        , index );

router.get('/form',[validarSession]
        , form );


module.exports = router;