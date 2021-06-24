//ler numero 1
//ler numero 2
//ler numero 3
// saber ser e um tringulo isosceles
// saber ser e um tringulo equilatero
// saber ser e um tringulo escaleno
// ser nao e um tringulo
var leia = require('../leitura/leitura');
console.log('informe o numero 1, 2 e 3: ');
let n1 = leia.numero();
let n2 = leia.numero();
let n3 = leia.numero();
if ((n1+n2)<n3 || (n3+n2)<n1 || (n1+n3)<n2){
    console.log("isso nao e um tringulo")
} else if (n1 == n2 && n1==n3){
    console.log("Triangulo equilatero")
} else if (n1 == n2 || n2==n3 || n1==n3){
    console.log("triangulo isoceles")
} else if (n1 != n2 != n3){
    console.log("triangulo escaleno")
}