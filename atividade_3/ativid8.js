//ler massa inicial;
// tempo
//metade de sua massa a cada 50 segundo
let readlineSync = require('readline-sync')
let massa;
let massaFinal;
let tempoS = 0;
let tempoM = 0;
let tempoH = 0;
massa = parseFloat(readlineSync.question('informe a massa inicial: '));
massaFinal = massa;
while(massaFinal >= 0.5){
    massaFinal = massaFinal/2;
    tempoS = tempoS +50;
}
console.log('massa inicial: '+massa);
console.log('massa final: '+massaFinal);
console.log('tempo tatol: '+tempoS);
tempoH = (tempoS/3600);
tempoM = (tempoS%3600)/60;
tempoS = (tempoS%3600)%60;
console.log('tempo em hora: '+tempoH.toFixed(2)+', em minutos: '+tempoM.toFixed(2)+', em segundos: '+tempoS);