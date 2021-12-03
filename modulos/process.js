process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale el proceso acabo');
  setTimeout(() => {
    console.log('Esto no se va a ver nunca');
  }, 0);
});

process.on('uncaughtException', (err, origin) => {
  console.log('Vaya se nos ha olvidado capturar un error');
  console.error(err);
});

process.on('unhandledRejection', () => {});

//funcionqueNoExiste();
console.log('Esto si el error no se recoje no sale');
