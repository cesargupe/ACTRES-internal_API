'use strict'

var express = require('express');
var ContentControler = require('../controllers/content');
var md_auth = require('../middlewares/auth');

var api = express.Router();

api.get('/all_content', md_auth.ensureAuth, ContentControler.getAllContent);
api.get('/content/:name/:language?', md_auth.ensureAuth, ContentControler.getContent);
api.get('/content_datasheet/:type', md_auth.ensureAuth, ContentControler.getContentDatasheet);
api.put('/content/:id', md_auth.ensureAuth, ContentControler.updateContent);
api.delete('/content/:id', md_auth.ensureAuth, ContentControler.deleteContent);

module.exports = api;
