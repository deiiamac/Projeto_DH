function perfilController(req, res, next) {
    res.render('perfil');
}



function uploadArquivo(req, res, next) {
    res.send('Arquivo upload sucesso')
}


module.exports = {
    perfilController,
    uploadArquivo
}