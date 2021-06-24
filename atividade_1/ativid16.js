//ler quantidade de sanduiches
//ler queijo
//ler presunto
//ler carne
var leia = require('../leitura/leitura');
console.log('informe a quantidade de sanduiches a fazer: ');
var QS = leia.numero();
var quepre = (50 * QS)/1000
var carne = (100 * QS)/1000
console.log('quantidades (em quilos) de queijo e presunto e: '+quepre+'kg')
console.log('quantidade carne: '+carne+'kg')