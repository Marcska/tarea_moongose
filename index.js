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
  Libro.find({Isbn:isbn},(err,data)=>{
    console.log(data);
  });
}
function modificarTituloByIsbn(isbn, nuevoTitulo, nuevoNombre, nuevoPaterno, nuevoMaterno){
  Libro.findOneAndUpdate({Isbn:isbn},
    {'Titulo':nuevoTitulo, 'Autor.primer':nuevoNombre, 'Autor.paterno':nuevoPaterno, 'Autor.materno':nuevoMaterno},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}
function main() {
  modificarTituloByIsbn(1111111,"Cómo programar en Java", "Harvey", "M", "Deitel");
  //buscarByIsbn(1111111);
  //nuevoLibro();
}

main();    // ejecutamos main
