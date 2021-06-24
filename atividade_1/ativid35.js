var leia = require('../leitura/leitura');
console.log('informe a diagonal maior e a menor: ');
var diamaior = leia.numero();
var diamenor = leia.numero();
var area = (diamaior * diamenor)/2
console.log('diagonal maior: '+diamaior)
console.log('diagonal memor: '+diamenor)
console.log('Area do losango: '+area)