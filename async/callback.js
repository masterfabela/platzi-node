function hola(nombre, callback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    callback();
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    callback();
  }, 500);
}

console.log('Iniciando proceso');
hola('Jose', () => {
  adios('Jose', () => {
    console.log('Terminando proceso');
  });
});

hola('Carlos', () => {});
adios('Carlos', () => {});
