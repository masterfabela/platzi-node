const fs = require('fs');
const { resolve } = require('path/posix');
const RUTA = __dirname + '/archivo.txt';
const RUTA_NUEVA = __dirname + '/archivo1.txt';

function leer(ruta) {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, (error, data) => {
      resolve(data.toString());
    });
  });
}

function escribir(ruta, contenido) {
  return new Promise((resolve, reject) => {
    fs.writeFile(ruta, contenido, (err) => {
      if (err) {
        console.error(err);
      }
      resolve();
    });
  });
}

function borrar(ruta) {
  return new Promise((resolve, reject) => {
    fs.unlink(ruta, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

escribir(RUTA_NUEVA, 'Esto es nuevo');
leer(RUTA).then((data) => {
  console.log(data);
});
borrar(RUTA_NUEVA);
