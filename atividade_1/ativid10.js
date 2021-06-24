// ler A (1x,1)
// ler B (x2,b2)
// distancia
var leia = require('../leitura/leitura');
console.log('informe A(x1, y1) e B(x2, y2)');
var x1 = leia.numero();
var y1 = leia.numero();
var x2 = leia.numero();
var y2 = leia.numero();
var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
console.log('distancia entre A('+x1+','+y1+') e B('+x2+','+y2+')')
console.log('distancia e '+distancia.toFixed(2))