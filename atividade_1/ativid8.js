//ler nota 1
//ler nota 2
//ler nota 3
// valor da media
var leia = require('../leitura/leitura');
console.log('informe n1, n2 e n3:');
var n1 = leia.numero();
var n2 = leia.numero();
var n3 = leia.numero();
var media = (n1+n2+n3)/3;
console.log('a sua media e: '+media) 