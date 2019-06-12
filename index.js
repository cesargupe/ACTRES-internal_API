'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3978;
var port_https = process.env.PORT_HTTPS || 3979;

mongoose.connect('mongodb://localhost:27017/actres_internal', {useNewUrlParser: true}, (err, res) => {

  if (err) {
    console.log(err);
  } else {
    console.log("Se ha conectado con la base de datos.");

    app.http_server.listen(port, function () {
      console.log("Servidor del API REST de Actres_internal escuchando en http://localhost:" + port);
    });

    app.https_server.listen(port_https, function () {
      console.log("Servidor del API REST de Actres_internal escuchando en https://localhost:" + port_https);
    });
  }

});
