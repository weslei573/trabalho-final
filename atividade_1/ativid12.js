//salario
//aumento em 15%
// desconto 8%
// imprimi o salario inicio, aumento e final
var leia = require('../leitura/leitura');
console.log('informe salario: ');
var sal = leia.numero();
var salA = (sal * 0.15) + sal
var salD = salA - (salA *0.08) 
console.log('meu salario '+sal+', aumento: '+salA+', salario final: '+salD)