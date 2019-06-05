'use strict'

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var http = require('http');
var https = require('https');

// Cargar rutas
var content_routes = require('./routes/content');
var datasheet_routes = require('./routes/datasheet');
//var notice_routes = require('./routes/notice');
var user_routes = require('./routes/user');

var options = {
  key: fs.readFileSync('certs/actres_unileon_es.key'),
  cert: fs.readFileSync('certs/actres_unileon_es.crt'),
  ca: fs.readFileSync('certs/DigiCertCA.crt')
}

var https_server = https.createServer(options, app);
var http_server = http.createServer(app);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras http
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');

    next();

});

// Carga de rutas base
app.use('/api', content_routes);
app.use('/api', datasheet_routes);
//app.use('/api', notice_routes);
app.use('/api', user_routes);

module.exports = {
  http_server,
  https_server
};
