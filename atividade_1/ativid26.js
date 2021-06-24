var leia = require('../leitura/leitura');
console.log('informe o numero 1, 2 e 3: ');
var n1 = leia.numero();
var n2 = leia.numero();
var n3 = leia.numero();
var total = n1*n2*n3
console.log('A multiplicação dos tres numeros e: '+total)