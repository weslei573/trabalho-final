var leia = require('../leitura/leitura');
console.log('informe a base maior, a menor e a altura: ');
var basema = leia.numero();
var baseme = leia.numero();
var altura = leia.numero();
var area = ((basema + baseme)*altura)/2
console.log('base maior: '+basema)
console.log('base menor: '+baseme)
console.log('altura: '+altura)
console.log('Area do trapezio: '+area)