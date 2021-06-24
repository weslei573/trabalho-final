//ler alerta de risco de 0 a 10
// imprime ser a grave ou nao
var leia = require('../leitura/leitura');
console.log('informe o risco de 0 a 10: ');
let nivel = leia.numero();
if(nivel > 9){
    console.log("nivel e grave")
} else {
    console.log("nivel de risco baixo")
}