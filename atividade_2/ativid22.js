//ler salario
//ler cargo
//condiçao de cargo
let readlineSync = require('readline-sync')
let salario;
let cargo;
let valor;
let diferenca;
console.log("informe seu cargo:")
console.log("101 - GERENTE")
console.log("102 - ENGENHEIRO")
console.log("103 - TECNICO")
cargo = (readlineSync.question('Codigo: '));
salario = parseFloat(readlineSync.question('informe o salario: '));
if(cargo == "101"){
    valor = salario + (salario*0.10)
    diferenca = valor - salario
    console.log("salario antigo: "+salario+", novo salario: "+valor+", a diferenca: "+diferenca)
} else if(cargo == "102"){
    valor = salario + (salario*0.20)
    diferenca = valor - salario
    console.log("salario antigo: "+salario+", novo salario: "+valor+", a diferenca: "+diferenca)
} else if(cargo == "103"){
    valor = salario + (salario*0.30)
    diferenca = valor - salario
    console.log("salario antigo: "+salario+", novo salario: "+valor+", a diferenca: "+diferenca)
} else {
    valor = salario + (salario*0.40)
    diferenca = valor - salario
    console.log("salario antigo: "+salario+", novo salario: "+valor+", a diferenca: "+diferenca)
}