const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarJWT, validarSession
} = require('../middlewares');

const { index } = require('../controllers/auth');


const router = Router();


router.get('/',[validarSession]
        , index );


module.exports = router;