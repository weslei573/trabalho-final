var leia = require('../leitura/leitura'); // chamando o modulo leitura
var m = require('../menu/menu') // chama o menu

var json = [] // armazena a roda da lista 1 e o exercicio
for (var exer = 0; exer <= 40; exer++){ // o exercicio que o usuario digita
    json.push(
        {
            'roda': `../atividade_1/ativid${exer}.js`
        }
    )
}

var json2 = [] // armazena a roda da lista 2 e o exercicio
for (var exer2 = 0; exer2 <= 25; exer2++){ // o exercicio que o usuario digita
    json2.push(
        {
            'roda': `../atividade_2/ativid${exer2}.js`
        }
    )
}

var json3 = [] // armazena a roda da lista 3 e o exercicio
for (var exer3 = 0; exer3 <= 26; exer3++){ // o exercicio que o usuario digita
    json3.push(
        {
            'roda': `../atividade_3/ativid${exer3}.js`
        }
    )
}

do {
    m.menu(); // menu na tela
    var caso = leia.ler(); //escreva na tela a lista que quer
    switch (caso){ // entra na lista de exercicios 
        case '1': // lista 1
            console.log('lista 1');
            var exer = leia.listaExe(); // escolhe um exercicio
            require(json[exer].roda);
        break;
        case '2': //lista 2
            console.log('lista 2');
            var exer2 = leia.listaExe(); // escolhe um exercicio
            require(json2[exer2].roda);
        break;
        case '3': //lista 3
            console.log('lista 3');
            var exer3 = leia.listaExe(); // escolhe um exercicio
            require(json3[exer3].roda);
        break;
        case 'x':
            console.log("FIM DO PROGRAMA");
        return 0;
        default: 
            console.log('LISTA NÃO ENCONTRADA!!'); 
    }
    console.log('##############################################################');
} while(caso !== 'x');