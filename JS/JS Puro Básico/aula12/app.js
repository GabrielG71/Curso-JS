function criarPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade};
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let nome = document.getElementById("name").value;
        let sobrenome = document.getElementById("sobrenome").value;
        let idade = document.getElementById("idade").value;

        const pessoa = criarPessoa(nome, sobrenome, idade);

        document.getElementById("name_p").innerText = `Nome: ${pessoa.nome}`;
        document.getElementById("sobrenome_p").innerText = `Sobrenome: ${pessoa.sobrenome}`;
        document.getElementById("idade_p").innerText = `Idade: ${pessoa.idade}`;

    })

})