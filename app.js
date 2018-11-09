var http = require('http');
var bodyParser = require('body-parser');

http.createServer(function (req, res) {
    
    if (req.method == 'POST') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('SE HIZO PETICION POST AL SERVIDOR...');
    }else if (req.method == 'GET') {        
      res.writeHead(200, { 'Content-Type': 'text/html' });        
      res.send('a');
      res.end('PETICION GET SERVIDOR CORRIENDO...');      
    }else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('Modulo de seguridad interna corriendo...');
    }
    
}).listen(process.env.PORT || 8080);