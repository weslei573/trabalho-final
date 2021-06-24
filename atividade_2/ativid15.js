//ler numero da matricula
// ler nome completo
//ler genero (M ou F)
//ler curso (BSI, EE, EM, EC ou AQ)
// ler coeficiente de rendimento.
// imprimi a matricula, nome, genero , curso, 
// coeficiente 9, 10 EXCELENTE
// coeficiente BOM 7, 9 
// coeficiente REGULAR 5, 7 
// coeficiente NECESSITA MELHORAS 3, 5
// coeficiente PREOCUPANTE 0, 3
let readlineSync = require('readline-sync')
let matricula;
let nome;
let genero;
let curso;
let coeficiente;
matricula = parseFloat(readlineSync.question('informe sua matricula: '));
nome = (readlineSync.question('nome completo: '));
genero = (readlineSync.question('seu genero: M ou F: '));
curso = (readlineSync.question('Curso (BSI, EE, EM, EC ou AQ): '));
coeficiente = parseFloat(readlineSync.question('coeficiente de re rendimento : '));
console.log("MATRICULA: "+matricula)
console.log("NOME: "+nome)
if(genero == "M" || genero == "m"){
    console.log("GENERO: MASCULINO");
    console.log("CURSO: "+curso);
    if (curso == "BSI"|| curso === "bsi"){
        console.log("Bacharelado em Sistemas de Informação")
        } else if(curso =="EE" || curso =="ee"){
            console.log("Engenharia Elétrica")
        } else if(curso == "EM" || curso == "em"){
            console.log("Engenharia Mecânica")
        } else if(curso == "EC" || curso == "ec"){
            console.log("Engenharia Civil")
        } else if(curso == "AQ" || curso == "aq"){
            console.log("Arquitetura")
        }
    console.log("SEU COEFICIENTE E: ");
    if(9 <= coeficiente || coeficiente >=10){
        console.log("EXCELENTE "+coeficiente)
        } else if(7 <= coeficiente || coeficiente > 9){
            console.log("BOM "+coeficiente)
            }  else if(5 <= coeficiente || coeficiente > 7){
                console.log("REGULAR "+coeficiente)
                } else if(3<= coeficiente || coeficiente > 5){
                    console.log("NECESSITA MELHORAR "+coeficiente)
                } else {
                        console.log("PREOCUPANTE " +coeficiente)
                }
                
} else {
    console.log("GENERO: FEMININO");
    console.log("CURSO: "+curso);
    if (curso == "BSI"|| curso === "bsi"){
        console.log("Bacharelado em Sistemas de Informação")
        } else if(curso =="EE" || curso =="ee"){
            console.log("Engenharia Elétrica")
         } else if(curso == "EM" || curso == "em"){
                console.log("Engenharia Mecânica")
        } else if(curso == "EC" || curso == "ec"){
            console.log("Engenharia Civil")
        } else if(curso == "AQ" || curso == "aq"){
            console.log("Arquitetura")
    }
    console.log("SEU COEFICIENTE E: ")
    if(9 <= coeficiente || coeficiente >=10){
        console.log("EXCELENTE "+coeficiente);
        } else if(7 <= coeficiente || coeficiente > 9){
            console.log("BOM "+coeficiente);
            }  else if(5 <= coeficiente || coeficiente > 7){
                console.log("REGULAR "+coeficiente);
                } else if(3<= coeficiente || coeficiente > 5){
                    console.log("NECESSITA MELHORAR "+coeficiente);
                } else {
                        console.log("PREOCUPANTE "+coeficiente);
    }
}
