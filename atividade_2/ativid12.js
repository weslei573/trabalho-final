//peixes: tubarao, enguia, arraia, lambari
//aves: pato, aguia, galinha, avestruz, pinguim
//mamiferos: morcego, leão, gato, onca pintada, ornitorrinco, baleia
let readlineSync = require('readline-sync')
let valor;

console.log("Irei tenta descobrir o animal que voce tem em mente")
valor = (readlineSync.question('informe uma caracteristica fisica: '));
if (valor == "peixe"){
    valor = (readlineSync.question('E uma grande predado: '));
    if(valor == "sim"){
        console.log("E uma TUBARAO")
    } else {
        valor = (readlineSync.question('A pele e uma mucosa lisa, suas cores sao cinza e preta: '));
        if(valor == "sim"){
            console.log("e uma Enguias")
        } else {
            valor = (readlineSync.question('Tem corpo grande e achatado: '));
            if(valor == "sim"){
                    console.log("e uma Arraia")
            } else {
                valor = (readlineSync.question('e um pequeno peixe de escama: '));
                if(valor == "sim"){
                    console.log("e uma Lambari")
                }      
            } 
        }

    }
} 
if (valor == "ave"){
    valor = (readlineSync.question('e menor que os anseridos (gansos e cisnes): '));
    if(valor == "sim"){
        console.log("E uma PATO")
    } else {
        valor = (readlineSync.question('Tem grande porte, e carnivoras: '));
        if(valor == "sim"){
            console.log("e uma AGUIA")
        } else {
            valor = (readlineSync.question('E criado em casa para consumo: '));
            if(valor == "sim"){
                    console.log("e uma GALINHA")
            } else {
                valor = (readlineSync.question('E a maior especie viva de ave: '));
                if(valor == "sim"){
                    console.log("e uma AVESTRUZ")
                } else {
                    valor = (readlineSync.question('Tem vida aquatica: '));
                    if(valor == "sim"){
                    console.log("e uma PINGUIM")
                    }  
                } 
            }
        }
    }
}
if(valor == "mamifero"){
    valor = (readlineSync.question('E o unico mamiferos que voam: '));
    if(valor == "sim"){
        console.log("E uma MORCEGOS")
    } else {
        valor = (readlineSync.question('tem juba: '));
        if(valor == "sim"){
            console.log("e uma LEÃO")
        } else {
            valor = (readlineSync.question('e uma animal domestico: '));
            if(valor == "sim"){
                    console.log("e uma GATO")
            } else {
                valor = (readlineSync.question('apresentar cor amarelo-dourado com manchas pretas: '));
                if(valor == "sim"){
                    console.log("e uma ONCA-PINTADA")
                } else {
                    valor = (readlineSync.question('e um mamifero semiaquatico natural da australia: '));
                    if(valor == "sim"){
                        console.log("e uma ORNITORRINCO")
                    } else {
                        valor = (readlineSync.question('tem em media 30 metros de comprimento e podendo pesar ate 200 toneladas: '));
                        if(valor == "sim"){
                            console.log("e uma BALEIA")
                        }
                    }
                }    
            } 
        }
    }
}