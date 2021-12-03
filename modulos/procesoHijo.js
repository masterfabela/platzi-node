const { exec, spawn } = require('child_process');

function ejecutarNode() {
  exec('node modulos/consola.js', (err, out, stError) => {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(out);
  });
}

function lanzarLS() {
  exec('ls -la', (err, out, stError) => {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(out);
  });
}
//ejecutarNode();

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', (dato) => {
  console.log(proceso.killed);
  console.log(dato.toString());
});
proceso.on('exit', () => {
  console.log('El proceso termino');
  console.log(proceso.killed);
});
