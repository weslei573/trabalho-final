// ler unidade de medida
// ler a temperatura
// condiçao se e de Celsius para fahrenheit
// ou se e de fahrenheit para graus celsius 
//converte a temperatura 
// ler monstra a temperatura 
let readlineSync = require('readline-sync')
let temperatura;
let unidade;
let fahrenheit
let celsius
console.log("ESTADOS UNIDOS")
console.log("informe qual e a unidade de medida de temperatura: ")
console.log("1: GRAUS CELSIUS")
console.log("2: FAHRENHEIT")
unidade = parseFloat(readlineSync.question('qual a unidade de medida: '));
temperatura = parseFloat(readlineSync.question('qual e a temperatura? '));
if(unidade == "1"){
    fahrenheit = ((temperatura * (9/5))+32);
    console.log("Graus celsius para Fahrenheit a temperatura e: "+fahrenheit.toFixed(2))
} else if(unidade == "2"){
    celsius = ((temperatura-32)*(5/9))
    console.log("Fahrenheit para graus celsius a temperatura e: "+celsius.toFixed(2))
}