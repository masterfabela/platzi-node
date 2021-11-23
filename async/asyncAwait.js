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
      resolve('Hay un error');
    }, 1000);
  });
}

async function main() {
  let nombre = await hola('Jose');
  await hablar();
  await hablar();
  await adios(nombre);
}

console.log('Empezamos');
main();
console.log('Terminamos');
