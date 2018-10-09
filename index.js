'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3978;

mongoose.connect('mongodb://localhost:27017/actres_internal', {useNewUrlParser: true}, (err, res) => {

  if (err) {
    console.log(err);
  } else {
    console.log("Se ha conectado con la base de datos.");

    app.listen(port, function () {
      console.log("Servidor del API REST de Actres_internal escuchando en http://localhost:" + port);
    })
  }

});
