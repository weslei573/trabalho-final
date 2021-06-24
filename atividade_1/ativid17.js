// ler graus
// fahrenheit
var leia = require('../leitura/leitura');
console.log('informe a temperatura em Celsius: ');
var graus = leia.numero();
var fahr = (graus * 1.8)+32
console.log('grau celsius '+graus+' para Fahrenheit: '+fahr)