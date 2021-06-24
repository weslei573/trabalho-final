//ler numero 1
//ler numero 2
//ler numero 3
//disisao de n1/n1 e 0
//disisao de n1/n2 e 0
//disisao de n1/n3 e 0
//disisao de n2/n1 e 0
//disisao de n2/n2 e 0
//disisao de n2/n3 e 0
//disisao de n3/n1 e 0
//disisao de n3/n2 e 0
//disisao de n3/n3 e 0
var leia = require('../leitura/leitura');
console.log('informe o numero 1, 2 e 3: ');
let n1 = leia.numero();
let n2 = leia.numero();
let n3 = leia.numero();
if(n1 % n1 ==0){
    console.log(`${n1} e multiplo de ${n1}` )
} if(n1 % n2 ==0){
    console.log(`${n1} e multiplo de ${n2}` )
} if(n1 % n3 ==0){
    console.log(`${n1} e multiplo de ${n3}` )
} if(n2 % n1 ==0){
    console.log(`${n2} e multiplo de ${n1}` )
} if(n2 % n2 ==0){
    console.log(`${n2} e multiplo de ${n2}` )
} if(n2 % n3 ==0){
    console.log(`${n2} e multiplo de ${n3}` )
} if(n3 % n1 ==0){
    console.log(`${n3} e multiplo de ${n1}` )
} if(n3 % n2 ==0){
    console.log(`${n3} e multiplo de ${n2}` )
} if(n3 % n3 ==0){
    console.log(`${n3} e multiplo de ${n3}` )
}