// - Una función sin parámetros que devuelva siempre "true"
function isTrue() {
  return true;
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000);
}).then(function () {
  console.log('Hola soy una promesa');
});

// - Una función generadora de índices pares automáticos
function* generaPar() {
  var index = 0;
  while (true) yield (index = index + 2);
}

const gen = generaPar();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
