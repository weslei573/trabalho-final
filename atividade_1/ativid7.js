// ler dia
// ler mes
// mes em dias
// total de dia que passaram
var leia = require('../leitura/leitura');
console.log('informe dia e mes');
var dia = leia.numero();
var mes = leia.numero();
var mesDias = 30 * mes
var totald = mesDias + dia
console.log('Ja se passaram '+totald+' dias do inicio do ano')