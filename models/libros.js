var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  Isbn: String,
  Autor: {
    primer: String,
    paterno: String,
    materno: String
  },
  Titulo: String,
  Aniopublicacion: Number
});

module.exports = mongoose.model('Libro', LibroSchema);
