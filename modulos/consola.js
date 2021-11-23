console.log('Algo');
console.info('Info');
console.error('Error');
console.warn('Warn');
let tabla = [
  { a: 1, b: 'z' },
  { a: 2, b: 'Otra' },
];
console.table(tabla);
console.group('conver');
console.log('Hola');
console.log('blablablabla');
console.log('adios');
console.groupEnd('conver');

function funcion1() {
  console.group('funcion1');
  console.log('Esto es de la funcion 1');
  funcion2();
  console.groupEnd('funcion1');
}

function funcion2() {
  console.group('funcion2');
  console.groupEnd('funcion2');
}

console.log('Empezamos');
funcion1();
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

console.count('a');
