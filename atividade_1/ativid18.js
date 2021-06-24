// hora trabalho R$ 10.00
// hora extra R$ 15.00
var leia = require('../leitura/leitura');
console.log('informe as horas normais de trabalho e as extra: ');
var hn = leia.numero();
var he = leia.numero();
var tn = (hn * 10);
var te = (he * 15);
var total = tn + te;
var totald = total - (total*0.10);
console.log('o salario firnal e : '+totald);