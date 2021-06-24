//ler numero 1
//ler numero 2
//ler numero 3
// condiçao se e o menor ser (n1 > n2) e (n1>n3). 
//ciondição se e o menor ser (n2>n1) e (n2>n3)
// condição sernao
var leia = require('../leitura/leitura');
console.log('informe o numero 1, 2 e 3: ');
let n1 = leia.numero();
let n2 = leia.numero();
let n3 = leia.numero();
if (n1 < n2 && n1 < n3){
    console.log("o "+n1+" e o menor")
} else if (n2 < n1 && n2 < n3){
    console.log("o "+n2+" e o menor")
} else {
    console.log("o "+n3+" e o menor")
}