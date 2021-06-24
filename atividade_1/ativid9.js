// pequeno R$10
// medio R$12
// grande R$15
// ler quantidade pequena
// ler quantidade media
// ler quantidade grande
var leia = require('../leitura/leitura');
console.log('informe quantidade pequena e media e grande;');
var p = leia.numero();
var m = leia.numero();
var g = leia.numero();
var quantidadeP = 10 * p
var quantidadeM = 12 * m
var quantidadeG = 15 * g
var valor = quantidadeP + quantidadeM + quantidadeG
console.log('quantidade de camisetas pequemas: '+quantidadeP)
console.log('quantidade de camisetas medias: '+quantidadeM)
console.log('quantidade de camisetas grandes: '+quantidadeG)
console.log('O valor arrecadado: '+valor)