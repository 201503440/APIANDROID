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
var text = ""; 

//Ejemplo: GET http://localhost:8080/items
/*app.get('/AndroidCircle', function(req, res, next) {
  if(req.query.filter) {
   next();
   return;
  }
  circle = 'C';
  res.send('circle');
});*/
 
//Ejemplo: GET http://localhost:8080/items?filter=ABC
/*app.get('/items', function(req, res) {
  var filter = req.query.filter;
  res.send('Get filter ' + filter);
});*/
 
//Ejemplo: GET http://localhost:8080/items/10
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

app.get('/Android/Cube', function(req, res, next) {
  cube = 'U';
  res.send('Cube Android');
});

app.get('/Arduino/Cube', function(req, res, next){
	res.send(cube);
	cube = 'u';
});
/*//Ejemplo: POST http://localhost:8080/items
app.post('/items', function(req, res) {
   var data = req.body.data;
   res.send('Add ' + data);
});
 
//Ejemplo: PUT http://localhost:8080/items
app.put('/items', function(req, res) {
   var itemId = req.body.id;
   var data = req.body.data;
   res.send('Update ' + itemId + ' with ' + data);
});
 
//Ejemplo: DELETE http://localhost:8080/items
app.delete('/items/:id', function(req, res) {
   var itemId = req.params.id;
   res.send('Delete ' + itemId);
});*/
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});					  