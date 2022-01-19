const CPF = require('cpf');
const fs = require ('fs');
const { setFlagsFromString } = require('v8');

// mensagem de boas vidas
console.log ("Seja bem vindo ao cadastrador de CPFs.");

// guardar a informação digitada pelo usuário.

const cpf = process.argv[2];

// validar se a informação digitada é um CPF.

let cpfValido = CPF.isValid(cpf);

// caso a informação seja um CPF válido, salvar o arquivo.
// caso contrário, exibir mensagem de erro.

if (cpfValido) {
    console.log("CPF válido! Salvando...");
    fs.writeFileSync ('dados.txt', cpf + "\n", {flag:'a'});
} else { 
    console.log ("CPF inválido, por favor digitar um CPF válido.");
}

// mensagem de fim
console.log ("Fim.");