// Cargar modulos y crear nueva aplicacion
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
 
var cilinder = 'c';
var piramide = 'p';
var heart = 'h';
var cube = 'u';
var text = ''; 

app.get('/Android/Piramide', function(req, res, next) {
  piramide = 'P';
  res.send('Piramide Android');
});

app.get('/Arduino/Piramide', function(req, res, next){
    res.send(piramide);
    piramide = 'p';
});
 
app.get('/Android/Cilinder', function(req, res, next) {
  cilinder = 'C';
  res.send('Cilinder Android');
});

app.get('/Arduino/Cilinder', function(req, res, next){
    res.send(cilinder);
    cilinder = 'c';
});

app.get('/Android/Heart', function(req, res, next) {
  heart = 'H';
  res.send('Heard Android');
});

app.get('/Arduino/Heart', function(req, res, next){
    res.send(heart);
    heart = 'h';
});

app.get('/AnCube', function(req, res, next) {
  cube = 'U';
  res.send('Cube Android');
});

app.get('/ArCube', function(req, res, next){
  res.send(cube);  
  cube = 'u';
  //linea extre CS  
  res.end('c:');
});

var server = app.listen(8080, function (req, res) {

  console.log('Server is running..'); 

});