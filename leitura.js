const readlineSync = require('readline-sync');

function ler() {
    var leitura = readlineSync.question('ESCOLHA A LISTA: ');
    return leitura
}

function listaExe() {
    var lista=readlineSync.question('ESCOLHAR O EXERCICIO: ');
    return lista
}

function nome() {
    var text=readlineSync.question('informe texto: ');
    return text
}

function numero() {
    var num = parseFloat(readlineSync.question('informe o numero: '));
    return num
}

module.exports = {ler, listaExe, numero, nome};