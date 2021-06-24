//ler numero 1
// ler numero 2
// realizar a somar
// resultado
var leia = require('../leitura/leitura');
console.log('informe o numero 1 e 2: ');
let n1 = leia.numero();
let n2 = leia.numero();
let total = n1 + n2
console.log("o resultado e: "+total)