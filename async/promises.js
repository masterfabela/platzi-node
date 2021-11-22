function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios ' + nombre);
      resolve(nombre);
    }, 500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla bla');
      //resolve(nombre);
      reject('Hay un error');
    }, 1000);
  });
}

// ---

hola('Jose')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminamos el proceso');
  })
  .catch((err) => {
    console.log(err);
  });

/*
console.log('Iniciando el proceso');
hola('Carlos')
  .then(adios(nombre))
  .then((nombre) => {
    console.log('Terminado el proceso');
  });
  */
