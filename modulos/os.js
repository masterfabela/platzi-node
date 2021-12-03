const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
//console.log(os.constants);
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
//console.log(os.networkInterfaces());

function kb(bytes) {
  const SIZE = 1024;
  return bytes / SIZE;
}
function mb(bytes) {
  const SIZE = 1024;
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  const SIZE = 1024;
  return mb(bytes) / SIZE;
}
