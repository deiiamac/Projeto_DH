var express = require('express');
const entrarController = require('../controllers/entrarController');
const cadastroControllerr = require('../controllers/cadastroController')
var router = express.Router();

/* SOBRE. */
router.get('/entrar', entrarController );
router.get('/cadastro', cadastroControllerr );

module.exports = router;
