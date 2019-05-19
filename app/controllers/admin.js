module.exports.formulario_inclusao_noticia = function (application,req,res) {
    res.render("admin/form_add_noticia",{validacao : {}, noticia : {}});
}
module.exports.noticias_salvar = function (application,req,res) {
    var noticia = req.body;
        req.assert("titulo","titulo obrigatorio").notEmpty();
        req.assert("resumo","Resumo obrigatorio").notEmpty();
        req.assert("resumo","Resumo deve conter entre 10 e 100 carecteres").len(10,100);
        req.assert("autor","Autor obrigatorio").notEmpty();
        req.assert("data_noticia","Data do fato obrigatorio").notEmpty();
        req.assert("noticia","Notícia é obrigatoria").notEmpty();
        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia",{validacao : erros, noticia : noticia});
            return;
        };
        var connection = application.config.db_connection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia,function (err, result) {
            res.redirect("/noticias");
        });
}