// ler 350 ml
// ler 600ml
//ler 2 litros
var leia = require('../leitura/leitura');
console.log('informe a quantidade de refregerante de 350ml, 600ml e 2l: ');
var lata = leia.numero();
var garrafa1 = leia.numero();
var garrafa2 = leia.numero();
var total = (((lata * 350)+(garrafa1 * 600))/1000)+(garrafa2*2)
console.log('quantidade de litros de refrigerante: '+total)