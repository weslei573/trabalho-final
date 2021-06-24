//ler alerta de risco de 0 a 10
// condição ser esta entre 0 e 10
// imprime ser a grave ou nao
var leia = require('../leitura/leitura');
console.log('informe o risco de 0 a 10: ');
let nivel = leia.numero();
if(nivel > 0 || nivel < 11){
    console.log(nivel+ " esta entre 0 e 10")
} else {
    console.log("nao esta entre 0 e 10")
}