var app = require('./config/server');

//var rotaHome = require('./app/routes/home')(app);
//var rotaForm = require('./app/routes/formulario_inclusao_noticia')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function() {
    console.log("Servidor On");
})