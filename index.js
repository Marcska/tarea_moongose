var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:ikvavNSuqo6ll2JS@cluster0-3pwhx.mongodb.net/libreria?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){

  var lib= Libro({
      Isbn: "1111111",
      Autor: {
        primer: "Antonie",
        paterno: "de Saint",
        materno: "Exupery"
      },
      Titulo: "El principito",
      Aniopublicacion: 1989
    });

    lib.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}
function buscarByIsbn(isbn){

}
function modificarTituloByIsbn(isbn, nuevoTitulo, autor){

}
function main() {
  nuevoLibro();
}

main();    // ejecutamos main
