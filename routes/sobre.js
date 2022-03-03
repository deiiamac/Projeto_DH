var express = require('express');
const sobreController = require('../controllers/sobreController');
var router = express.Router();

/* PERFIL. */
router.get('/', sobreController );

module.exports = router;
