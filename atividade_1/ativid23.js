//ler sombra do predio
//ler sombra do usuario
// ler altura do usuario
// fazer o calculo da altura
var leia = require('../leitura/leitura');
console.log('informe sombra do predio em metro, do usuario e a sua: ');
var sPredio = leia.numero();
var sUsua = leia.numero();
var Ausua = leia.numero();
var sr = sPredio/sUsua
var aPredio = sr * Ausua
console.log('Altura co predio e: '+aPredio)