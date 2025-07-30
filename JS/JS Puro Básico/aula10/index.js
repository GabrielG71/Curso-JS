function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criarPessoa("Gabriel", "Gonçalves", 18);

let str_pessoa1 = JSON.stringify(pessoa1, null, 2);

console.log(str_pessoa1);
console.log(`Nome: ${pessoa1.nome}`);
console.log(`Sobrenome: ${pessoa1.sobrenome}`);
console.log(`Idade: ${pessoa1.idade}`);