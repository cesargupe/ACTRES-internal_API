'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');

var secret = 'aed085f52d361348612b5c27cd82925f'

exports.ensureAuth = function(req, res, next) {

  if (!req.headers.authorization) {
    //return next();
    if (req.params.name == 'general' || req.params.name == 'acceso') return next();
    return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
  }

  var token = req.headers.authorization.replace(/['"]+/g, '');

  try {

    var payload = jwt.decode(token, secret);

    if (payload.exp <= moment().valueOf()) {
      req.user = payload;
      //return next();
      return res.status(401).send({message: 'El token ha expirado'});
    }

  } catch (e) {
    //return next();
    return res.status(401).send({message: 'Token no válido'});
  }

  req.user = payload;

  next();

};
