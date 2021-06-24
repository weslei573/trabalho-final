var leia = require('../leitura/leitura');
console.log('informe o peso: ');
var peso = leia.numero();
var total = peso * 1000
console.log('peso: '+peso)
console.log('o peso em grama: '+total)