const pessoas = require('./pessoas.json');
const fs = require ('fs');

// capturar: nome, cpf, se é casado e filhos e guardar em variáveis de mesmos nomes

const nome = process.argv[2];
const cpf = process.argv[3];
const casado = (process.argv[4] == "1");
const filhos = process.argv.slice(5);

// criar um objeto com essas informações

const pessoa = {
    nome, 
    cpf,
    casado,
    filhos,
};

console.log (pessoa);
// adicionar o objeto criado ao array pessoas

pessoas.push(pessoa);

// salvar o array de pessoas no arquivo pessoas.json

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas, null, 4));

// mostrar o array de pessoas no formato de tabela

console.table(pessoas);

//fim