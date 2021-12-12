const http = require('http');

http.createServer(router).listen(3000);

console.log('Escuchando http en puerto 3000');

function router(req, res) {
  console.log('nueva peticion');
  console.log(req.url);
  switch (req.url) {
    case '/hola':
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;
    default:
      res.write('Error 404: no se lo que quieres');
      res.end();
  }
}

function hola() {
  return 'Hola que tal';
}
