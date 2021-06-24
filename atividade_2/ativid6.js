//ler alerta de risco de 0 a 10
// condição ser esta entre 0 e 3
// condição ser esta entre 3 e 6
// condição ser esta entre 6 e 9
// condição ser grave
// imprime ser a grave ou nao
var leia = require('../leitura/leitura');
console.log('informe o risco de 0 a 10: ');
let nivel = leia.numero();
if(nivel >= 0 && nivel <=3){
    console.log(nivel+ " nivel BAIXO")
} else if(nivel > 3 && nivel <= 6 ){
    console.log(nivel+ " nivel Medio")
} else if(nivel >6 && nivel <= 9){
    console.log(nivel+" nivel ALTO")
} else {
    console.log("nivel GRAVE")
}