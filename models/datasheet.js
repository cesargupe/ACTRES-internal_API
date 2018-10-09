'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DatasheetSchema = Schema({
  name: String,
  type: String,
  data: Object
});

module.exports = mongoose.model('Datasheet', DatasheetSchema);
