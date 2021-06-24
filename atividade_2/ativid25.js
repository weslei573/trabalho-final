//ler valor x, y, z
// condiçao para um triangulo
let readlineSync = require('readline-sync')
let x;
let y;
let z;
x = parseFloat(readlineSync.question('informe valor de x: '));
y = parseFloat(readlineSync.question('informe valor de y: '));
z = parseFloat(readlineSync.question('informe valor de z: '));
if ((x+y)<z || (z+y)<x || (x+z)<y){
    console.log("O comprimento de cada lado em um triângulo é menor que a soma dos outros dois lados")
} else if (x == y && x==z){
    console.log("Triangulo Equiláteros: tem os comprimentos dos três lados iguais")
} else if (x == y || y==z || x==z){
    console.log("triangulo Isósceles: tem os comprimentos de dois lados iguais")
} else if (x != y != z){
    console.log("triangulo escaleno: tem os comprimentos dos três lados diferentes")
}