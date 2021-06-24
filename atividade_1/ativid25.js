//ler a altura da caixa
//ler o raio da caixa
// calcular
var leia = require('../leitura/leitura');
console.log('informe a altura  e o raia da caixa: ');
var h = leia.numero();
var r = leia.numero();
var pi = 3.14
var total = pi*Math.pow(r, 2)*h
console.log('o volume em agua e :' +total.toFixed(1))