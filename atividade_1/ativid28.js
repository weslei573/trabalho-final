var leia = require('../leitura/leitura');
console.log('informe o notas 1 e 2: ');
var n1 = leia.numero();
var n2 = leia.numero();
var total = ((n1*2)+(n2*3))/(3+2)
console.log('a media em peso 2 e 3 das duas notas e: '+total)