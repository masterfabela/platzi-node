function hola(nombre, callback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    callback(nombre);
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    callback();
  }, 500);
}

function hablar(callback) {
  setTimeout(() => {
    console.log('bla bla bla bla');
    callback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    callback(nombre, () => {});
  }
}

// --

hola('Carlos', (nombre) => {
  conversacion(nombre, 3, adios);
});

/*
console.log('Iniciando proceso');
hola('Jose', () => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios('Jose', () => {
          console.log('Terminando proceso');
        });
      });
    });
  });
});
*/
