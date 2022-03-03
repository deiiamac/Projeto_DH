var express = require('express');
const { perfilController, uploadArquivo} = require('../controllers/perfilController');
var router = express.Router();

// ========== MULTER
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
// ========

/* SOBRE. */
router.get('/', perfilController );

// ========== MULTER
router.post('/upload', upload.single('foto'), uploadArquivo)

module.exports = router;