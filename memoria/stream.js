const fs = require('fs');
const stream = require('stream');
const Util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');
readableStream.on('data', (chunk) => {
  data += chunk;
});
readableStream.on('end', () => {
  //console.log(data);
});

/*
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');
*/

const Transform = stream.Transform;

function mayus() {
  Transform.call(this);
}
Util.inherits(mayus, Transform);

mayus.prototype._transform = function (chunk, codificacion, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayusObject = new mayus();
readableStream.pipe(mayusObject).pipe(process.stdout);

readableStream.pipe();
